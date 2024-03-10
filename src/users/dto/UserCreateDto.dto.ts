import { IsNumber, IsString, MinLength } from "class-validator";

export class UserCreateDto{

  

    @IsString()
    @MinLength(2)
    name:string;

    @IsNumber()
    age:number;

    constructor(name:string,age:number){}
}