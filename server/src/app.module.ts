import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModule } from './expense/expense.modul';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://misho95:123456789qQq@budget-app-nest.cag0885.mongodb.net/?retryWrites=true&w=majority',
    ),
    ExpenseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
