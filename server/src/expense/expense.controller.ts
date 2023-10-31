import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ExpenseService } from './expense.service';
import { ExpenseInputValidator } from './expense.input.validator';
import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('/api/v1/expenses')
export class ExpenseController {
  constructor(private readonly expenseService: ExpenseService) {}

  @Get('/')
  getAllExpenses(@Request() req) {
    console.log(req.user);
    return this.expenseService.getAllExpenses(req.user.sub);
  }

  @Get('/:expenseId')
  getExpenseById(@Param('expenseId') expenseId: string) {
    return this.expenseService.getExpenseById(expenseId);
  }

  @Post('/')
  postNewExpense(@Request() req, @Body() expenseData: ExpenseInputValidator) {
    const userId = req.user.sub;
    return this.expenseService.postNewExpense(expenseData, userId);
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
