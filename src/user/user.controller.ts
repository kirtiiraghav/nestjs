import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getUsers();
  }

  @Get(':id') // define route param here
  getUser(@Param('id') id: number) {
    return this.userService.getUser(id);
  }

  @Get(':userId')
  @Post()
  store(@Req() req: Request) {
    return req.body;
  }

  @Post()
  createUser(@Body('name') name: string, @Body('age') age: number) {
    return this.userService.createUser(name, age);
  }

  @Patch(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body('name') name: string,
  ) {
    return this.userService.updateUser(id, name);
  }

  @Patch(':userId')
  update(@Req() req: Request, @Param() param: { userId: number }) {
    return req.body;
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
