import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { createCountDto } from './createCountDto.dto';
import { FizzbuzzService } from './fizzbuzz.service';

@Controller('fizzbuzz')
export class FizzbuzzController {
    constructor(private fizzbuzzSvc: FizzbuzzService){}

    @Post()
    fizzbuzz(@Body() countTo: createCountDto): Array<number | string> {
        return this.fizzbuzzSvc.fizzbuzz(countTo.counter)
    }
    @Get()
    fizzbuzzUrl(@Query('counter') counter: number): Array<number | string> {
        return this.fizzbuzzSvc.fizzbuzz(counter)
    }
}
