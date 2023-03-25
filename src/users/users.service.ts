import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from 'src/cars/cars.model';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User) private userRep: typeof User) { }

  async createUser(dto: CreateUserDto) {
    const user = await this.userRep.create(dto);
    return user;
  }

  async getUserByName(name: string) {
    const user = await this.userRep.findOne({ where: { name } });
    return user;
  }

  async getUserById(id: string) {
    const user = await this.userRep.findOne({ where: { id } });
    return user;
  }

  async getAllUsers() {
    const users = await this.userRep.findAll({ include: { all: true } });
    return users;
  }

  async getAllUsersCars() {
    let allUsers = this.getAllUsers();
    let usersCars = (await allUsers).filter(user => user.cars.length !== 0)
    return usersCars;
  }

  async getAllUsersNoCars() {
    let allUsers = this.getAllUsers();
    let usersNoCars = (await allUsers).filter(user => user.cars.length === 0)
    return usersNoCars;
  }

}
