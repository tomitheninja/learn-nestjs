import { Module } from '@nestjs/common';
import { Hf1Controller } from './hf1.controller';

@Module({
  controllers: [Hf1Controller]
})
export class Hf1Module {}
