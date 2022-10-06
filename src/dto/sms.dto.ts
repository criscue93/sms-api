import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDefined,
  IsInt,
  IsString,
  MinLength,
} from 'class-validator';

export class smsDTO {
  @IsInt({ message: 'El número de destino tienen que ser un número.' })
  @IsDefined({ message: 'El número de destino son obligatorios.' })
  @ApiProperty()
  celular: string;

  @IsString({ message: 'Subject tiene que ser una cadena.' })
  @IsDefined({ message: 'Subject es obligatorio.' })
  @MinLength(1, {
    message: 'Subject debe contener al menos 1 caracter.',
  })
  @ApiProperty()
  mensaje: string;

  @ApiProperty()
  @IsBoolean()
  guardar: boolean;
}
