import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Delete()
  async delete(@Body() id: number) {
    this.usersService.remove(id);
    return true;
  }
}
