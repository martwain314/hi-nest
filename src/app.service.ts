import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): void {
    // return 'Hello World!';
  }
  getUser(): string {
    return 'eunchong shin';
  }
}
