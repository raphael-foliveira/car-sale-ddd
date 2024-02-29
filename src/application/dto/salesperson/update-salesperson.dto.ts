import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateSalespersonDto {
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsPhoneNumber('BR')
  phone: string;
  @IsString()
  address: string;
}
