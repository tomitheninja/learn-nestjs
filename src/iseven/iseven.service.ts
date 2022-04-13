import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { IsDivisible } from './isdivisible';

@Injectable()
export class IsevenService {
  constructor(private readonly prismaService: PrismaService) {}
  private readonly isDivisibleByTwo = new IsDivisible(2);

  public isEven(num: number): boolean {
    return this.isDivisibleByTwo.canDivide(num);
  }

  public async isEvenFromDb(num: number): Promise<boolean> {
    const result = await this.prismaService.evenOrOdd.findUnique({
      where: { num },
      select: { even: true },
    });
    if (!result) throw new InternalServerErrorException('Number not found');
    return result.even;
  }
}
