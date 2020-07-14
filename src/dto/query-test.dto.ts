import { IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class QueryTest {
  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ default: 0 })
  numberPropertyDefaultIsZeroNumber: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ default: "0" })
  numberPropertyDefaultIsZeroString: number;

  @IsNumber()
  @Type(() => Number)
  @ApiProperty({ default: 10 })
  numberPropertyDefaultIsNonZero: number;
}
