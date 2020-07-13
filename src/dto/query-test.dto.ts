import { IsEnum, IsNumber, IsString } from 'class-validator';
import { UserRole } from '../enum/user-role.enum';

export class QueryTest {
  @IsEnum(UserRole)
  userRole: UserRole;

  @IsNumber()
  numberProperty: number;

  @IsString()
  stringProperty: string;
}
