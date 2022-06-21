import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetLoggedUser } from 'src/auth/decorators/get-logged-user.decorator';
import { GetUserProfileDto } from './dto/user.get-profile.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
@UseGuards(AuthGuard())
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/:id')
  public async getProfileById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetLoggedUser() loggedUser: User,
  ): Promise<GetUserProfileDto | null> {
    return this.service.getProfileById(id, loggedUser);
  }
}
