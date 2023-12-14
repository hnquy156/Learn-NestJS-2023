import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatsService } from 'src/cats/cats.service';
import { ForbiddenException } from 'src/forbidden.exception';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    throw new ForbiddenException();
    return this.catsService.findAll();
  }
}
