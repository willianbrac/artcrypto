import {
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetLoggedUser } from 'src/auth/decorators/get-logged-user.decorator';
import { User } from '../user/user.entity';
import { GetNFTDto } from './dto/nft.get.dto';
import { NFTService } from './nft.service';

@Controller('nfts')
@UseGuards(AuthGuard())
export class NFTController {
  constructor(private readonly service: NFTService) {}

  @Post('/:id/likes')
  public async like(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetLoggedUser() user: User,
  ): Promise<void> {
    return this.service.like(id, user);
  }

  @Get('')
  public async findAll(@GetLoggedUser() user: User): Promise<GetNFTDto[]> {
    return this.service.findAll(user);
  }

  @Get('/:id')
  public async findById(
    @Param('id', new ParseUUIDPipe()) id: string,
    @GetLoggedUser() user: User,
  ): Promise<GetNFTDto | null> {
    return this.service.findById(id, user);
  }

  @Delete('/:id')
  public async delete(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<void> {
    return this.service.delete(id);
  }
}
