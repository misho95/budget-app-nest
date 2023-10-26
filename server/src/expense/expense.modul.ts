import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModel } from 'src/models/expense.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ExpenseModel.name, schema: ExpenseModel },
    ]),
  ],
  controllers: [ExpenseController],
  providers: [ExpenseService],
})
export class AppModule {}
