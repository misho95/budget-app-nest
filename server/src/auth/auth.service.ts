import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/models/user.model';
import { userLoginDataType, userSignUpType } from './auth.type';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel.name) private userModel: Model<UserModel>,
  ) {}
  signin(userData: userLoginDataType) {
    const { email, password } = userData;
    return this.userModel.findOne({ email, password });
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
