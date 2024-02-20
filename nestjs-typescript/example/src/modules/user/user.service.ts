import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../../common/dtos/create-user.dto'
import { UpdateUserDto } from '../../common/dtos/update-user.dto'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  findAll() {
    return 'This action returns all user'
  }

  findOne(id: number) {
    return `This action returns a #${id} user`
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
