import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class UpdateClientDto {
  @IsString()
  @IsOptional()
  name: string;
  @IsEmail()
  @IsOptional()
  email: string;
  @IsStrongPassword()
  @IsOptional()
  password: string;
  @IsPhoneNumber('BR')
  @IsOptional()
  phone: string;
  @IsString()
  @IsOptional()
  address: string;
}
