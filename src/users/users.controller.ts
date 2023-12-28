import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/auth/roles.enum';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  @Roles(Role.Admin)
  async create(@Body() user: User) {
    return this.usersService.create(user);
  }

  @Delete()
  @Roles(Role.Admin)
  async delete(@Body() id: number) {
    this.usersService.remove(id);
    return true;
  }
}
