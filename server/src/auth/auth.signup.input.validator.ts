import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthSignUpInputValidator {
  @IsNotEmpty()
  username: string;
  password: string;
  @IsEmail()
  email: string;
}
