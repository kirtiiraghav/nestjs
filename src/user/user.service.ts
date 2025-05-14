import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'User1', age: 20 },
    { id: 2, name: 'User2', age: 20 },
    { id: 3, name: 'User3', age: 20 },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user =
      this.users.find((user) => user.id === id) || `User ${id} doesn't exist`;
    return user;
  }

  createUser(createUserDto: CreateUserDto) {
    const { name, age } = createUserDto;
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, name: string) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      return 'User not found';
    }
    user.name = name;
    return user;
  }

  delete(id: number) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return 'User not found';
    }

    const deletedUser = this.users.splice(userIndex, 1);
    return deletedUser;
  }
}
