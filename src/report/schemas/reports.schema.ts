import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReportDocument = Report & Document;

@Schema()
export class LanguageReport {
  @Prop()
  language: string;

  @Prop()
  checkers: string[];

  @Prop()
  check: string[];
}

const LanguageReportSchema = SchemaFactory.createForClass(LanguageReport);

@Schema()
export class Report {
  @Prop()
  url: string;

  @Prop()
  languages: string[];

  @Prop()
  time: string;

  @Prop({ type: [LanguageReportSchema] })
  checks: LanguageReport[];
}

export const ReportSchema = SchemaFactory.createForClass(Report);
