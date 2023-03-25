import { Controller,  Post, Body, Get, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { ApiResponse } from '@nestjs/swagger/dist';
import { ApiTags } from '@nestjs/swagger/dist/decorators';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

  constructor (private usersService: UsersService) {}

  @ApiOperation({summary: 'Создать пользователя'})
  @ApiResponse({status: 200, type: User})
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }
  
  @ApiOperation({summary: 'Получить всех пользователей'})
  @ApiResponse({status: 200, type: [User]})
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({summary: 'Получить пользователей с авто'})
  @ApiResponse({status: 200, type: [User]})
  @Get('users-cars')
  getUsersCars() {
    return this.usersService.getAllUsersCars();
  }

  @ApiOperation({summary: 'Получить пользователей без авто'})
  @ApiResponse({status: 200, type: [User]})
  @Get('users-no-cars')
  getUsersNoCars() {
    return this.usersService.getAllUsersNoCars();
  }

}
