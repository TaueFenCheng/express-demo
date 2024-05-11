import { Controller, Get, Req, Post, Header, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { Request } from 'express';
import { HttpCode } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(@Req() request: Request): string {
    // console.log(request)
    return 'This action returns all cats';
  }

  @Get('ab*cd')
  findSpeical() {
    return 'This route uses a wildcard';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return this.appService.findFromIds(params.id);
  }

  @Post()
  @Header('Cache-Control', 'no-cache')
  @HttpCode(204)
  crate(): string {
    return 'this is a post request';
  }
}
