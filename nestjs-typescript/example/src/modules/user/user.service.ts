import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { CreateUserDto } from '../../common/dtos/create-user.dto'
import { UpdateUserDto } from '../../common/dtos/update-user.dto'
import { User } from 'src/common/entities/user.entity'

@Injectable()
export class UserService {
  private users: User[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme'
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess'
    }
  ]

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { userId, username, password } = createUserDto

    if (userId && username && password) {
      this.users.push(createUserDto)
      return createUserDto
    } else {
      throw new InternalServerErrorException()
    }
  }

  async findAll(): Promise<User[]> {
    return this.users
  }

  async findOne(username: string): Promise<User> {
    return this.users.find(user => user.username === username)
  }

  async update(username: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = this.users.find(user => user.username === username)
    user.userId = updateUserDto.userId
    user.username = updateUserDto.username
    user.password = updateUserDto.password
    return user
  }

  async remove(username: string): Promise<User> {
    const user = this.users.find(user => user.username === username)
    this.users = this.users.filter(user => user.username !== username)
    return user
  }
}
