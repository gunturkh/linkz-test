import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import UserEntity from 'src/user/entities/user.entity';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    MikroOrmModule.forFeature({
      entities: [UserEntity],
    }),
  ],
  exports: [MikroOrmModule],
})
export class DatabaseModule {}
