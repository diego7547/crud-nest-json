import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { UserCreateDto } from '../dto/UserCreateDto.dto';
import { UserUpdateDto } from '../dto/UserUpdateDto.dtl';

@Controller('user')
export class UserController {
    
    constructor(private readonly userService:UserService){}
    
    @Get('')
    public find(){
        return this.userService.findAll();
    }

    @Get(':id')
    public findOne(@Param('id') id:number){
        return this.userService.findById(id);
    }

    @Post('')
    public create(@Body() userCreateDto:UserCreateDto){
        return this.userService.createUser(userCreateDto);
    }

    @Put(':id')
    public update(@Param('id') id:number,@Body() userUpdateDto:UserUpdateDto){
        return this.userService.udpdateUser(id,userUpdateDto);
    }
}
