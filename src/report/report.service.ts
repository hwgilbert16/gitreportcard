import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Report, ReportDocument } from './schemas/reports.schema';
import { Model } from 'mongoose';

@Injectable()
export class ReportService {
  constructor(
    private configService: ConfigService,
    @InjectModel(Report.name) private ReportModel: Model<ReportDocument>,
  ) {}

  startReport(repoUrl: string) {
    // 1. check mongo if report already exists. if it does, then do nothing
    // 2. if no report is found, spawn a docker container and supply with repo url

    return;
  }
}
