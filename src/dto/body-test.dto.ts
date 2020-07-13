import { IsEnum, IsNumber, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { UserRole } from '../enum/user-role.enum';

export class BodyTest {
  @IsEnum(UserRole)
  userRole: UserRole;

  @IsNumber()
  numberProperty: number;

  @IsString()
  stringProperty: string;

  @IsDate()
  @Type(() => Date)
  dateProperty: Date;
}
