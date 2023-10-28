import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthSignUpInputValidator } from './auth.signup.input.validator';
import { AuthSignInInputValidator } from './auth.signin.input.validator';
import { AuthGuard } from './auth.guard';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('/signin')
  signIn(@Body() userData: AuthSignInInputValidator) {
    return this.authService.signin(userData);
  }

  @Post('/signup')
  signup(@Body() userData: AuthSignUpInputValidator) {
    return this.authService.singup(userData);
  }
  @UseGuards(AuthGuard)
  @Get('/profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
