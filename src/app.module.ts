import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ReportModule } from './report/report.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ReportModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot('mongodb://localhost/gitreportcard'),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
