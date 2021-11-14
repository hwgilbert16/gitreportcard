import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway()
export class ReportGateway {
  @WebSocketServer() server;
}
