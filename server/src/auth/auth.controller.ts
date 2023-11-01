import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpInputValidator } from './auth.signup.input.validator';
import { AuthSignInInputValidator } from './auth.signin.input.validator';
import { Public } from './auth.public';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('/signin')
  signIn(@Body() userData: AuthSignInInputValidator) {
    return this.authService.signin(userData);
  }

  @Public()
  @Post('/signup')
  signup(@Body() userData: AuthSignUpInputValidator) {
    return this.authService.singup(userData);
  }

  @Get('/profile')
  getProfile(@Request() req) {
    return this.authService.getProfile(req.user);
  }

  @Get('/signout')
  signout(@Request() req) {
    req.user = '';
    return 'signout';
  }
}
