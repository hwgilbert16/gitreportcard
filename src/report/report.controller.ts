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

@Controller('report')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Get(':org/:repo')
  @Render('report')
  getReport(@Param() params): void {
    const repoUrl = `https://github.com/${params.org}/${params.repo}`;

    this.reportService.startReport(repoUrl);
  }

  @Get(':org/:repo/raw')
  @Render('report')
  getRawReport(@Param() params): void {
    // get raw report from mongo

    const repoUrl = `https://github.com/${params.org}/${params.repo}`;
  }

  @Post()
  @UseGuards(ReportGuard)
  postReport(): void {
    // add report to mongo and make it look nice in json
  }
}
