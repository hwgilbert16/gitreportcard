import { Controller, Get, Post, Render, UseGuards } from '@nestjs/common';
import { ReportGuard } from './report.guard';

@Controller('report')
export class ReportController {
  @Get()
  @Render('report')
  getReport(): void {
    return;
  }

  @Post()
  @UseGuards(ReportGuard)
  postReport(): any {
    return;
  }
}
