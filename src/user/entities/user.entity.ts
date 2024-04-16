import { Entity, Property, PrimaryKey, Index } from '@mikro-orm/core';

@Entity()
class UserEntity {
  @PrimaryKey()
  uid: string;

  @Property()
  username: string;

  @Property()
  email: string;

  @Property()
  password: string;

  @Property()
  latestLogin: string | null;

  @Property()
  creationTime: string;

  @Index()
  @Property({ nullable: true, type: 'timestamptz' })
  deletedAt?: Date;
}

export default UserEntity;
