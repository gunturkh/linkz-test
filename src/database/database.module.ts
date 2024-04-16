import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import UserEntity from 'src/user/entities/user.entity';
import PostEntity from 'src/user/entities/post.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [UserEntity, PostEntity],
    }),
  ],
  exports: [MikroOrmModule],
})
export class DatabaseModule {}
