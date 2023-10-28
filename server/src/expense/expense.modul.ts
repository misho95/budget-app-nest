import { Module } from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseController } from './expense.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ExpenseModel, ExpenseSchema } from 'src/models/expense.model';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ExpenseModel.name, schema: ExpenseSchema },
    ]),
  ],
  controllers: [ExpenseController],
  providers: [{ provide: APP_GUARD, useClass: AuthGuard }, ExpenseService],
})
export class ExpenseModule {}
