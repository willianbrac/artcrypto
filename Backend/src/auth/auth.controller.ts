import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUserDto } from 'src/domain/user/dto/user.get.dto';
import { User } from '../domain/user/user.entity';
import { AuthService } from './auth.service';
import { GetLoggedUser } from './decorators/get-logged-user.decorator';
import { SignInCredentialsDto } from './dto/sign-in-credentials.dto';
import { SignUpCredentialsDto } from './dto/sign-up-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/signUp')
  public signUp(@Body() credentialsDto: SignUpCredentialsDto): Promise<User> {
    return this.service.signUp(credentialsDto);
  }
  @Post('/signIn')
  public signIn(
    @Body() credentialsDto: SignInCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.service.signIn(credentialsDto);
  }
  @Get('')
  @UseGuards(AuthGuard())
  public getSignedUserInfo(@GetLoggedUser() user: User): GetUserDto {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
