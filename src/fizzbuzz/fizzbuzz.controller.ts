import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCountDto } from './createCountDto.dto';
import { FizzbuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzbuzzController {
    constructor(private fizzbuzzSvc: FizzbuzzService){}

    @Post()
    fizzbuzz(@Body() countTo: createCountDto): Array<number | string> {
        return this.fizzbuzzSvc.fizzbuzz(countTo.counter)
    }
}
