import { ApiProperty } from "@nestjs/swagger/dist/decorators"
import { IsString, IsEmail, Length } from "class-validator"

export class CreateUserDto {
    @ApiProperty({example: 'user@mail.ru', description: 'Почтовый адрес'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail( {}, {message: 'Не коректный email'})
    readonly email: string

    @ApiProperty({example: '12345678', description: 'Пароль пользователя'})
    @IsString({message: 'Должно быть строкой'})
    @Length(4, 16, {message: 'Не меньше 4 и не более 16'})
    readonly password: string
}