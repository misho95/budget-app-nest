import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpenseModel } from 'src/models/expense.model';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(ExpenseModel.name) private expenseModel: Model<ExpenseModel>,
  ) {}
  getAllExpenses() {
    return this.expenseModel.find();
  }
  postNewExpense() {
    return 'add new post';
  }
}
