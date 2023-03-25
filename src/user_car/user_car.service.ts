import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CarsService } from 'src/cars/cars.service';
import { UsersService } from 'src/users/users.service';
import { UserCars } from './user-cars.model';

@Injectable()
export class UserCarService {

  constructor(@InjectModel(UserCars) private userCarRep: typeof UserCars,
    private carsService: CarsService,
    private userService: UsersService
  ) { }

  async addCarsToUser(par: { car_number?: string; name?: any; }) {
    const user = await this.userService.getUserByName(par.name);
    const car = await this.carsService.getCarByNumber(par.car_number);
    await user.$add('cars', [car.id]);
    return user;
  }

}
