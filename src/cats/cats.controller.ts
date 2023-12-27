import {
  Controller,
  Get,
  Post,
  Body,
  ParseIntPipe,
  Param,
  UseGuards,
} from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { CatsService } from 'src/cats/cats.service';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/roles.decorator';

@Controller('cats')
@UseGuards(RolesGuard)
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Roles(['admin'])
  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.findOne(id);
  }
}
