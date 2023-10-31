import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ExpenseModel } from 'src/models/expense.model';
import { expenseData } from './expense.type';

@Injectable()
export class ExpenseService {
  constructor(
    @InjectModel(ExpenseModel.name) private expenseModel: Model<ExpenseModel>,
  ) {}
  getAllExpenses(userId) {
    return this.expenseModel.find({ userId });
  }

  getExpenseById(id: string) {
    return this.expenseModel.findOne({ _id: id });
  }

  postNewExpense(expenseData: expenseData, userId: string) {
    const { amount, category, type, createdAt } = expenseData;
    const expense = new this.expenseModel();
    expense.amount = amount;
    expense.category = category;
    expense.type = type;
    expense.createdAt = createdAt;
    expense.userId = userId;
    return expense.save();
  }

  updateExpense(id: string, updatedExpense: expenseData) {
    const { amount, category, type, createdAt } = updatedExpense;
    return this.expenseModel.updateOne(
      { _id: id },
      { amount, category, type, createdAt },
    );
  }

  deleteExpense(id: string) {
    return this.expenseModel.deleteOne({ _id: id });
  }
}
