import { IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class UserUpdateDto{


    @IsString()
    @MinLength(2)
    @IsOptional()
    name?:string;

    @IsNumber()
    @IsOptional()
    age?:number;

    
}