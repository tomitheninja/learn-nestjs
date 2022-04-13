import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('hf1')
export class Hf1Controller {
  @Get('/query')
  query(@Query('id') id): string {
    return 'query.id = ' + id;
  }

  @Get('/param/:id')
  param(@Param('id') id): string {
    return 'param = ' + id;
  }

  @Post('/body')
  body(@Body('id') id): string {
    return 'body.id = ' + id;
  }
}
