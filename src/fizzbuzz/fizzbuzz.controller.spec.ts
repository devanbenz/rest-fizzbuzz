import { Test, TestingModule } from '@nestjs/testing';
import { FizzbuzzController } from './fizzbuzz.controller';

describe('FizzbuzzController', () => {
  let controller: FizzbuzzController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FizzbuzzController],
    }).compile();

    controller = module.get<FizzbuzzController>(FizzbuzzController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
