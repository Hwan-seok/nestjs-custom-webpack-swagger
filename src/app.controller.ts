import { Controller, Get, Post, Query, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryTest } from './dto/query-test.dto';
import { BodyTest } from './dto/body-test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  queryTest(@Query() queryTest: QueryTest): string {
    console.log(queryTest);
    return this.appService.getHello();
  }

  @Post()
  bodyTest(@Body() bodyTest: BodyTest): string {
    console.log(bodyTest);
    return this.appService.getHello();
  }
}
