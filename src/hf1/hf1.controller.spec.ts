import { Test, TestingModule } from '@nestjs/testing';
import { Hf1Controller } from './hf1.controller';

describe('Hf1Controller', () => {
  let controller: Hf1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Hf1Controller],
    }).compile();

    controller = module.get<Hf1Controller>(Hf1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
