import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseModel } from 'src/models/expense.model';
import { ExpenseInputValidator } from './expense.input.validator';

@Controller('/api/v1/expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('/')
  getAllExpenses() {
    return this.expenseService.getAllExpenses();
  }

  @Get('/:expenseId')
  getExpenseById(@Param('expenseId') expenseId: string) {
    return this.expenseService.getExpenseById(expenseId);
  }

  @Post('/')
  postNewExpense(@Body() expenseData: ExpenseInputValidator) {
    return this.expenseService.postNewExpense(expenseData);
  }
  @Put('/:expenseId')
  updateExpense(
    @Param('expenseId') expenseId: string,
    @Body() updatedExpense: ExpenseInputValidator,
  ) {
    return this.expenseService.updateExpense(expenseId, updatedExpense);
  }

  @Delete('/:expenseId')
  deleteExpense(@Param('expenseId') expenseId: string) {
    return this.expenseService.deleteExpense(expenseId);
  }
}
