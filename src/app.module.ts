import { TestController } from './controllers/test.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './sockets/chat/chat.gateway';

@Module({
    imports: [],
    controllers: [TestController, AppController],
    providers: [AppService, ChatGateway],
})
export class AppModule {}
