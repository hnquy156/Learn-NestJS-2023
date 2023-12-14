import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './controllers/cats.controller';
import { AppService } from './app.service';
import { CatsService } from './services/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
