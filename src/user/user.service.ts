import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    { id: 3, name: 'User3' },
  ];

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user =
      this.users.find((user) => user.id === id) || `User ${id} doesn't exist`;
    return user;
  }

  createUser(name: string, age: number) {
    const newUser = {
      id: this.users.length + 1,
      name,
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