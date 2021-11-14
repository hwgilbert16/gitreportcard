import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ReportService {
  constructor(private configService: ConfigService) {}
}
