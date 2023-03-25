import { ApiProperty } from "@nestjs/swagger";

export class UserCarsDto {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  id: number;
  @ApiProperty({example: '1', description: 'ID пользователя'})
  userId: number;
  @ApiProperty({example: '1', description: 'ID машины'})
  carId: number;
}