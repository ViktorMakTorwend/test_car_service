import { ApiProperty } from "@nestjs/swagger";

export class CreateCarDto {
  @ApiProperty({example: 'Lada', description: 'Марка авто'})
  readonly marka: string;
  @ApiProperty({example: 'Granta', description: 'Модель авто'})
  readonly model: string;
  @ApiProperty({example: '2020', description: 'Год выпуска авто'})
  readonly prod_year: string;
  @ApiProperty({example: 'AA100A', description: 'Номер машины'})
  readonly car_number: string;
}