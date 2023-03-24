import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Carrier } from 'src/carrier/carrier.model';
import { Car } from 'src/cars/cars.model';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Car, Carrier])]
})
export class UsersModule {}
