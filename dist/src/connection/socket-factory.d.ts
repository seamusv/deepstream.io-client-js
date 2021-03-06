import { Message } from '../../binary-protocol/src/message-constants';
export declare type SocketFactory = (url: string, options: object) => Socket;
export interface Socket extends WebSocket {
    onparsedmessages: (messages: Array<Message>) => void;
    sendParsedMessage: (message: Message) => void;
}
export declare const socketFactory: (url: string, options: any) => Socket;
