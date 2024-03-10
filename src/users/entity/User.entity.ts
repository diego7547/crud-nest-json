import { IsNumber, IsString, MinLength } from "class-validator";

export class User{
    @IsNumber()
    id:number;

    @IsString()
    @MinLength(2)
    name:string;

    @IsNumber()
    age:number;
    constructor(id:number,name:string,age:number){
        this.id = id;
        this.name = name;
        this.age = age
    }
}