import { IsNotEmpty, IsEmail } from 'class-validator';

export class AuthSignInInputValidator {
  @IsNotEmpty()
  password: string;
  @IsEmail()
  email: string;
}
