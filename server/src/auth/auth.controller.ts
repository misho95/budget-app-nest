import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpInputValidator } from './auth.signup.input.validator';
import { AuthSignInInputValidator } from './auth.signin.input.validator';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signin')
  signIn(@Body() userData: AuthSignInInputValidator) {
    return this.authService.signin(userData);
  }

  @Post('/signup')
  signup(@Body() userData: AuthSignUpInputValidator) {
    return this.authService.singup(userData);
  }
}
