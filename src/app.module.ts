import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FizzbuzzController } from './fizzbuzz/fizzbuzz.controller';
import { FizzbuzzService } from './fizzbuzz/fizzbuzz.service';

@Module({
  imports: [],
  controllers: [AppController, FizzbuzzController],
  providers: [AppService, FizzbuzzService],
})
export class AppModule {}
