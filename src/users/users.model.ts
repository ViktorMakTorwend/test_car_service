import { ApiProperty } from "@nestjs/swagger/dist";
import { Model, Table, Column, DataType, BelongsToMany } from "sequelize-typescript";
import { Carrier } from "src/carrier/carrier.model";
import { Car } from "src/cars/cars.model";


interface UserCreationAttr {
  name: string;
  phone: string;
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttr> {

  @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ApiProperty({example: 'Иван', description: 'Имя пользователя'})
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({example: '25-25-25', description: 'Телефон'})
  @Column({ type: DataType.STRING, allowNull: false})
  phone: string;
  
  @ApiProperty({example: 'user@list.com', description: 'Почта'})
  @Column({ type: DataType.STRING, allowNull: false })
  email: string;

  @ApiProperty({example: '12345', description: 'Пароль'})
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @BelongsToMany( () => Car, () => Carrier )
  cars: Car[];

}
