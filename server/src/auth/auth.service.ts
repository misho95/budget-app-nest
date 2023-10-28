import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/models/user.model';
import { userLoginDataType, userSignUpType } from './auth.type';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserModel>,
    private jwtService: JwtService,
  ) {}
  async signin(userData: userLoginDataType) {
    const user = await this.userModel.findOne({ email: userData.email });
    if (user.password !== userData.password) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user._id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  singup(userData: userSignUpType) {
    const { username, email, password } = userData;

    const user = new this.userModel();
    user.username = username;
    user.email = email;
    user.password = password;
    return user.save();
  }
}
