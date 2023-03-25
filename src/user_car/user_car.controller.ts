import { Body, Controller, Post} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { UserCarService } from './user_car.service';

@ApiTags('Пользователи с машиной')
@Controller('user-car')
export class UserCarController {

  constructor (private userCarService: UserCarService) {}

  @ApiOperation({summary: 'Добавить пользователю авто'})
  @ApiResponse({status: 200, type: User})
  @Post('/addcar')
  addCarUser(@Body() par:{car_number: string, name:string}) {
    return this.userCarService.addCarsToUser(par);
  }

}
