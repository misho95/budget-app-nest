import { Controller, Get, Post } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('/api/v1/expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('/')
  getAllExpenses() {
    return this.expenseService.getAllExpenses();
  }

  @Post('/')
  postNewExpense() {
    return this.expenseService.postNewExpense();
  }
}
