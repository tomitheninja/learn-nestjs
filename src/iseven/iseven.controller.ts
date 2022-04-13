import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { IsevenService } from './iseven.service';

@Controller('iseven')
export class IsevenController {
  constructor(private isevenService: IsevenService) {}

  @Get('/')
  async query(@Query('num') id: string): Promise<string> {
    const int = Number.parseInt(id, 10);
    if (!Number.isFinite(int))
      throw new BadRequestException('num must be a number');
    return (await this.isevenService.isEvenFromDb(int)) ? 'even' : 'odd';
  }
}
