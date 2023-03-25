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

  async getCarsByMarka(marka: string) {
    const car = await this.carRep.findAll({where: {marka}});
    return car;
  }

  async getCarByNumber(car_number: string) {
    const car = await this.carRep.findOne({where: {car_number}});
    return car;
  }

  async getAllCars() {
    const cars = await this.carRep.findAll({ include: { all: true } });
    return cars;
  }

  async getAllCarsUsers() {
    let allCars = this.getAllCars();
    let carsUsers = (await allCars).filter(car => car.users.length !== 0)
    return carsUsers;
  }

  async getAllCarsNoUsers() {
    let allCars = this.getAllCars();
    let carsNoUsers = (await allCars).filter(car => car.users.length === 0)
    return carsNoUsers;
  }

  async getAllCarsNoUsersMarka(marka: string) {
    let allCars = this.getAllCars();
    let carsNoUsers = (await allCars).filter(car => car.users.length === 0)
    let carsNOUsersMarka = (await carsNoUsers).filter(car => car.marka === marka)
    return carsNOUsersMarka;
  }


}
