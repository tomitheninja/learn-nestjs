import { Module } from '@nestjs/common';
import { IsevenController } from './iseven.controller';
import { IsevenService } from './iseven.service';

@Module({
  controllers: [IsevenController],
  providers: [IsevenService],
})
export class IsevenModule {}
