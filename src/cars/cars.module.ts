import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CarsService } from './cars.service';
import { CarsController } from './cars.controller';
import { Car } from './cars.model';
import { User } from 'src/users/users.model';
import { UserCars } from 'src/users/user-cars.model';

@Module({
  providers: [CarsService],
  controllers: [CarsController],
  imports: [SequelizeModule.forFeature([Car, User, UserCars])]
})
export class CarsModule {}
