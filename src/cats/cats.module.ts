import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { AllExceptionsFilter } from 'src/http-exception.filter';

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    { provide: 'APP_FILTER', useClass: AllExceptionsFilter },
  ],
})
export class CatsModule {}
