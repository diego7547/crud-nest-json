import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { dataUser } from 'src/utils/data';
import { UserCreateDto } from '../dto/UserCreateDto.dto';
import { User } from '../entity/User.entity';
import { UserUpdateDto } from '../dto/UserUpdateDto.dtl';

@Injectable()
export class UserService {


    public findById(id:number){
        return dataUser.find((user)=> user.id === id);
    }

    public findAll(){
        return dataUser;
    }

    public createUser(user:UserCreateDto){
        const userNew  =  new User(dataUser.length ,user.name,user.age) ;     // dataUser.push(new UserCreateDto((dataUser.length +1),user.name,user.age));
        dataUser.push(userNew)
        return {}
    }

    public udpdateUser(id:number,user:UserUpdateDto){
        const newList = dataUser.filter((data)=> {
         if(data.id === id){
                data.name = user.name;
                data.age = user.age;
        } 
        return data;    
    })

        

        console.log(newList);

        
        return {}
    }
}
