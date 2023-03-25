import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from 'src/cars/cars.model';
import { CarsModule } from 'src/cars/cars.module';
import { UserCars } from '../user_car/user-cars.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Car, UserCars])],
  exports: [UsersService]
})
export class UsersModule {}
