import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';
import { UpdateClientDto } from './update-client.dto';

export class CreateClientDto extends UpdateClientDto {
  @IsString()
  @Length(11)
  nationalId: string;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsStrongPassword()
  password: string;
  @IsPhoneNumber('BR')
  phone: string;
  @IsString()
  address: string;
}
