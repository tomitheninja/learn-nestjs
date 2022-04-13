import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { IsevenService } from './iseven.service';

@Controller('iseven')
export class IsevenController {
  constructor(private isevenService: IsevenService) {}

  @Get('/')
  query(@Query('num') id: string): string {
    const int = Number.parseInt(id, 10);
    if (!Number.isFinite(int))
      throw new BadRequestException('num must be a number');
    return this.isevenService.isEven(int) ? 'even' : 'odd';
  }
}
