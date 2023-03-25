import { ApiProperty } from "@nestjs/swagger/dist";
import { Model, Table, Column, DataType, ForeignKey } from "sequelize-typescript";
import { Car } from "src/cars/cars.model";
import { User } from "src/users/users.model";


@Table({ tableName: 'users-cars', createdAt: false, updatedAt: false })
export class UserCars extends Model<UserCars> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: '1', description: 'ID пользователя'})
  @ForeignKey( () => Car)
  @Column({ type: DataType.INTEGER})
  userId: number;

  @ApiProperty({example: '1', description: 'ID машины'})
  @ForeignKey( () => User)
  @Column({ type: DataType.INTEGER})
  carId: number;

}
