import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { typeOrmConfig } from './config/typeOrm.config';
import { CollectionModule } from './domain/collection/collection.module';
import { NFTModule } from './domain/nft/nft.module';
import { UserModule } from './domain/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    AuthModule,
    UserModule,
    CollectionModule,
    NFTModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
