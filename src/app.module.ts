import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from '@nestjs/sequelize'
import { User } from "./users/users.model";
import { UsersModule } from './users/users.module';
import { CarsModule } from './cars/cars.module';
import { Car } from "./cars/cars.model";
import { UserCars } from "./user_car/user-cars.model";


@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({envFilePath: `.${process.env.NODE_ENV}.env`}),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Car, UserCars],
      autoLoadModels: true
    }),
    UsersModule,
    CarsModule,
  ]  
})
export class AppModule {

}