import { NotFoundException } from '@nestjs/common';

class UserNotFoundException extends NotFoundException {
  constructor(uid: number) {
    super(`User with uid ${uid} not found`);
  }
}

export default UserNotFoundException;
