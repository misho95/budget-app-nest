import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserModel } from 'src/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(UserModel.name) private expenseModel: Model<UserModel>,
  ) {}
  signin() {
    return 'helloo';
  }
}
