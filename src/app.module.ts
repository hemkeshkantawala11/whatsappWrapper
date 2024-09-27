import { Module } from '@nestjs/common';
import { WrapperModule } from './wrapper/wrapper.module';

@Module({
  imports: [WrapperModule],
})
export class AppModule {}
