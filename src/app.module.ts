import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { CustomerModule } from './customer/customer.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
