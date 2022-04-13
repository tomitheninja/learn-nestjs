import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { IsevenController } from './iseven.controller';
import { IsevenService } from './iseven.service';

@Module({
  controllers: [IsevenController],
  providers: [IsevenService, PrismaService],
})
export class IsevenModule {}
