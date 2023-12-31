import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  findAll(): Cat[] {
    return this.cats;
  }

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findOne(id: number): Cat {
    return this.cats[id];
  }
}
