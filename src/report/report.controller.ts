import {
  Controller,
  Get,
  Param,
  Post,
  Render,
  UseGuards,
} from '@nestjs/common';
import { ReportGuard } from './report.guard';
import { ReportService } from './report.service';
import { ReportGateway } from './report.gateway';

@Controller('report')
export class ReportController {
  constructor(
    private readonly reportService: ReportService,
    private readonly reportGateway: ReportGateway,
  ) {}

  @Get(':org/:repo')
  @Render('report')
  getReport(@Param() params): void {
    return;
  }

  @Post()
  @UseGuards(ReportGuard)
  postReport(): any {
    return;
  }
}
