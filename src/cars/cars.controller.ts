import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Car } from './cars.model';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@ApiTags('Автомобили')
@Controller('cars')
export class CarsController {

  constructor(private carService: CarsService) { }

  @ApiOperation({ summary: 'Создать автомобиль' })
  @ApiResponse({ status: 200, type: Car })
  @Post()
  create(@Body() dto: CreateCarDto) {
    return this.carService.createCar(dto);
  }

  @ApiOperation({ summary: 'Получить все автомобили' })
  @ApiResponse({ status: 200, type: [Car] })
  @Get()
  getAll() {
    return this.carService.getAllCars();
  }

  @ApiOperation({ summary: 'Получить все автомобили определенной марки' })
  @ApiResponse({ status: 200, type: [Car] })
  @Get('marka/:marka')
  getByMarka(@Param('marka') value: string) {
    return this.carService.getCarsByMarka(value);
  }

  @ApiOperation({ summary: 'Получить все автомобили c определенным номером' })
  @ApiResponse({ status: 200, type: [Car] })
  @Get('number/:car_number')
  getByNumber(@Param('car_number') value: string) {
    return this.carService.getCarByNumber(value);
  }

  @ApiOperation({summary: 'Получить авто с пользователем'})
  @ApiResponse({status: 200, type: [Car]})
  @Get('cars-users')
  getCarsUsers() {
    return this.carService.getAllCarsUsers();
  }

  @ApiOperation({summary: 'Получить авто без пользователя'})
  @ApiResponse({status: 200, type: [Car]})
  @Get('cars-no-users')
  getCarsNoUsers() {
    return this.carService.getAllCarsNoUsers();
  }

  @ApiOperation({summary: 'Получить авто без пользователя определенной марки'})
  @ApiResponse({status: 200, type: [Car]})
  @Get('cars-no-users/:marka')
  getCarsNoUsersMarka(@Param('marka') value:string) {
    return this.carService.getAllCarsNoUsersMarka(value);
  }
}
