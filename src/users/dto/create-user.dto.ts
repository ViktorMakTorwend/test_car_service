import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

  @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
  readonly name: string;
  @ApiProperty({example: '25-25-25', description: 'Телефон'})
  readonly phone: string;
  @ApiProperty({example: 'user@list.com', description: 'Почта'})
  readonly email: string;
  @ApiProperty({example: '12345', description: 'Пароль'})
  readonly password: string;
}