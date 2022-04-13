import { Test, TestingModule } from '@nestjs/testing';
import { IsevenController } from './iseven.controller';
import { IsevenService } from './iseven.service';

describe('IsevenController', () => {
  let controller: IsevenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IsevenController],
      providers: [IsevenService],
    }).compile();

    controller = module.get<IsevenController>(IsevenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
