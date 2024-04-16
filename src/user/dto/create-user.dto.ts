import {
  IsNotEmpty,
  MaxLength,
  MinLength,
  Matches,
  IsAlpha,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(20)
  @IsAlpha()
  username: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(20)
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,20}$/, {
    message: 'password too weak',
  })
  password: string;
}
