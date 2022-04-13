import { Injectable } from '@nestjs/common';
import { IsDivisible } from './isdivisible';

@Injectable()
export class IsevenService {
  private readonly isDivisibleByTwo = new IsDivisible(2);

  public isEven(num: number): boolean {
    return this.isDivisibleByTwo.canDivide(num);
  }
}
