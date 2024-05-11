import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  findFromIds(id: string): string {
    return (
      [
        {
          id: 1,
          name: 'zhangsan',
        },
        {
          id: 2,
          name: 'lishi',
        },
      ].find((item) => item.id === Number(id)).name || 'not found'
    );
  }
}
