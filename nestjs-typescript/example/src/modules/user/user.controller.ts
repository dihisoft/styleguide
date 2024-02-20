import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from '../../common/dtos/create-user.dto'
import { UpdateUserDto } from '../../common/dtos/update-user.dto'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { User } from 'src/common/entities/user.entity'

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @ApiOperation({
    summary: 'Create User'
  })
  async create(
    @Body() createUserDto: CreateUserDto
  ): Promise<User> {
    return this.userService.create(createUserDto)
  }

  @Get()
  @ApiOperation({
    summary: 'Get Users'
  })
  async findAll(): Promise<User[]> {
    return this.userService.findAll()
  }

  @Get(':username')
  @ApiOperation({
    summary: 'Get User'
  })
  async findOne(
    @Param('username') username: string
  ): Promise<User> {
    return this.userService.findOne(username)
  }

  @Patch(':username')
  @ApiOperation({
    summary: 'Update User'
  })
  async update(
    @Param('username') username: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User> {
    return this.userService.update(username, updateUserDto)
  }

  @Delete(':username')
  @ApiOperation({
    summary: 'Remove User'
  })
  async remove(
    @Param('username') username: string
  ): Promise<User> {
    return this.userService.remove(username)
  }
}
