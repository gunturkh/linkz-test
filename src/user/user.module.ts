import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import UserEntity from './entities/user.entity';
import { FirebaseAdmin } from 'src/firebase-setup';
import PostEntity from './entities/post.entity';

@Module({
  imports: [MikroOrmModule.forFeature([UserEntity, PostEntity])],
  controllers: [UserController],
  providers: [UserService, FirebaseAdmin],
})
export class UserModule {}
