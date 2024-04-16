import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import UserEntity from './entities/user.entity';
import UserNotFoundException from 'src/exception/userNotFound.exception';
import { CreateUserDto } from './dto/create-user.dto';
import { FirebaseAdmin } from 'src/firebase-setup';
import { EntityManager } from '@mikro-orm/postgresql';
import { UpdateUserDto } from './dto/update-user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: EntityRepository<UserEntity>,
    private readonly admin: FirebaseAdmin,
    private readonly em: EntityManager,
  ) {}

  getUsers() {
    return this.userRepository.findAll();
  }

  // async getUserById(uid: number) {
  //   const post = await this.userRepository.findOne({
  //     uid,
  //   });
  //   if (!post) {
  //     throw new UserNotFoundException(uid);
  //   }
  //   return post;
  // }

  async login(userRequest: UpdateUserDto): Promise<any> {
    const { username, password, latestLogin } = userRequest;
    try {
      const user = await this.em.findOne(UserEntity, {
        username,
        password,
      });
      user.latestLogin = latestLogin;
      await this.em.flush();
      console.log('logged user', user);
      // return createdUser;
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async createUser(userRequest: CreateUserDto): Promise<any> {
    const { username, password } = userRequest;
    const app = this.admin.setup();
    try {
      const createdUser = await app.auth().createUser({
        email: `${username}@test.com`,
        password,
      });
      await app.auth().setCustomUserClaims(createdUser.uid, { role: 'USER' });
      const user = await this.userRepository.create({
        uid: createdUser.uid,
        email: createdUser.email,
        username,
        password,
        latestLogin: createdUser?.metadata?.lastSignInTime || '',
        creationTime: createdUser.metadata.creationTime,
      });
      await this.em.flush();
      console.log('created user', user);
      // return createdUser;
      return user;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async verify(token: string): Promise<any> {
    const app = this.admin.setup();
    console.log('token', token);
    try {
      if (token != null && token != '') {
        const userVerification = await app
          .auth()
          ?.verifyIdToken(token.replace('Bearer ', ''));
        return userVerification;
      }
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
