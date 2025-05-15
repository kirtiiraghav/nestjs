import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  //get all users data from database
  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getUser(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } });
  }

  createUser(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  updateUser(id: number, name: string) {
    return this.userRepository.update(id, {name}) // expects an object - this works because { name } is an object with the field name, which matches the field in your User entity.
  }

  delete(id: number) {
    return this.userRepository.delete(id);
  }
}
