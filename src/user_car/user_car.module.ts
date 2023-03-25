import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Car } from 'src/cars/cars.model';
import { CarsModule } from 'src/cars/cars.module';
import { User } from 'src/users/users.model';
import { UsersModule } from 'src/users/users.module';
import { UserCars } from './user-cars.model';
import { UserCarController } from './user_car.controller';
import { UserCarService } from './user_car.service';

@Module({
  controllers: [UserCarController],
  providers: [UserCarService],
  imports: [SequelizeModule.forFeature([User, Car, UserCars]), CarsModule, UsersModule]
})
export class UserCarModule {}
