import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Car } from './cars.model';
import { CreateCarDto } from './dto/create-car.dto'

@Injectable()
export class CarsService {


  constructor(@InjectModel(Car) private carRep: typeof Car) {}


  async createCar(dto: CreateCarDto) {
    const car = await this.carRep.create(dto);
    return car;
  }

  async getCarsByValue(marka: string) {
    const car = await this.carRep.findAll({where: {marka}});
    return car;
  }

  async getAllCar() {
    const cars = await this.carRep.findAll();
    return cars;
  }

}
