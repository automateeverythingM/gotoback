import { Controller, Get } from '@nestjs/common';

@Controller('test')
export class TestController {
    @Get()
    homeTest(): string {
        return 'Home test';
    }

    @Get('pass')
    testPath(): string {
        return 'test passed!';
    }
}
