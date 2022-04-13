import { Test, TestingModule } from '@nestjs/testing';
import { IsevenService } from './iseven.service';

describe('IsevenService', () => {
  let service: IsevenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IsevenService],
    }).compile();

    service = module.get<IsevenService>(IsevenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
