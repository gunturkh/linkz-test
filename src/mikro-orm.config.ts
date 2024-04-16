import UserEntity from './user/entities/user.entity';
import { Logger } from '@nestjs/common';
import { defineConfig } from '@mikro-orm/postgresql';

const logger = new Logger('MikroORM');

export default defineConfig({
  entities: [UserEntity],
  dbName: 'testdb',
  user: 'postgres',
  password: 'postgres',
  host: 'host.docker.internal',
  port: 5432,
  debug: true,
  logger: logger.log.bind(logger),
});
