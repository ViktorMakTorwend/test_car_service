import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Car } from './cars.model';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';

@ApiTags('Автомобили')
@Controller('cars')
export class CarsController {
   
  constructor(private carService: CarsService) {}

  @ApiOperation({summary: 'Создание автомобиля'})
  @ApiResponse({status: 200, type: Car})
  @Post()
  create(@Body() dto: CreateCarDto) {
    return this.carService.createCar(dto);
  }

  @ApiOperation({summary: 'Получить все автомобили'})
  @ApiResponse({status: 200, type: [Car]})
  @Get()
  getAll() {
    return this.carService.getAllCar();
  }

  @ApiOperation({summary: 'Получить все автомобили определенной марки'})
  @ApiResponse({status: 200, type: [Car]})
  @Get('/:marka')
  getByValue(@Param('marka') value: string) {
    return this.carService.getCarsByValue(value );
  }
}
