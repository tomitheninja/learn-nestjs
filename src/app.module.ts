import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hf1Module } from './hf1/hf1.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { IsevenModule } from './iseven/iseven.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/'),
    }),
    Hf1Module,
    IsevenModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
