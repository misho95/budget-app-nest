import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/models/user.model';
import { userLoginDataType, userSignUpType } from './auth.type';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { error } from 'console';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserModel>,
    private jwtService: JwtService,
  ) {}
  async signin(userData: userLoginDataType) {
    const user = await this.userModel.findOne({ email: userData.email });
    const isMatch = await bcrypt.compare(userData.password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async singup(userData: userSignUpType) {
    const { username, email, password } = userData;

    const checkMail = await this.userModel.findOne({ email });

    if (checkMail) {
      // throw new error('Email is Arleady Used!');
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'Email is Already In Used!',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }

    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltOrRounds);

    const user = new this.userModel();
    user.username = username;
    user.email = email;
    user.password = hashPassword;
    return user.save();
  }

  async getProfile(userSign) {
    const userInfo = await this.userModel.findOne({ _id: userSign.sub });
    return userInfo;
  }
}
