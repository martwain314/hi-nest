// import { Body, Controller, Post } from '@nestjs/common';
// import { Login } from 'src/output/entities/Login';
// import { GeneralJoinDto } from './general-join-dto';
// import { JoinRepository } from './join-repository';

// @Controller('join')
// export class JoinController {
//   constructor(private joinRepository: JoinRepository) {}

//   @Post()
//   async create(@Body() joinInfo: GeneralJoinDto): Promise<Login> {
//     return await this.joinRepository.save(joinInfo);
//   }
// }
