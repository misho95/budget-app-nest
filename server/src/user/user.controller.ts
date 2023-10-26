import { Controller, Get } from '@nestjs/common';
import { AuthService } from './user.service';

@Controller('/api/v1/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('/signin')
  signIn() {
    return 'signin';
  }
}
