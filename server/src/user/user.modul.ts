import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModel } from 'src/models/user.model';
import { AuthController } from './user.controller';
import { AuthService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserModel.name, schema: UserModel }]),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
