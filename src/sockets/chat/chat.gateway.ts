import { wsConfig } from '../../utils/index';
import { Logger } from '@nestjs/common';
import {
    OnGatewayInit,
    SubscribeMessage,
    WebSocketGateway,
    WsResponse,
} from '@nestjs/websockets';
import { IMessage, IRoom, IUser } from 'src/interface';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(wsConfig)
export class ChatGateway implements OnGatewayInit {
    private logger: Logger = new Logger('Chat Logger');

    afterInit(server: Server): void {
        this.logger.log('Initialized!');
    }

    @SubscribeMessage('join room')
    handleUserJoinRoom(client: Socket, data: IRoom): void {
        const { roomName, user } = data;
        client.join(roomName);
        client.to(roomName).emit('user join room', user);
    }

    @SubscribeMessage('leaveRoom')
    handleUserLeaveRoom(client: Socket, data: IRoom): void {
        const { roomName, user } = data;
        client.to(roomName).emit('user left room', user);
        client.leave(roomName);
    }

    @SubscribeMessage('newMessage')
    handleMessage(client: Socket, data: IMessage): WsResponse<IMessage> {
        return { event: 'updateMessages', data };
    }
}
