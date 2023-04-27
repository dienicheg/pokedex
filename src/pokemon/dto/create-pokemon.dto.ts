import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";


export class CreatePokemonDto {

    //Debe ser entero, positivo, y el valor minimo debe ser 1
    @IsInt()
    @IsPositive()
    @Min(1)
    no: number;

    //Debe ser un string y minlength debe ser 1
    @IsString()
    @MinLength(1)
    name: string;

}
