import { IsNotEmpty, IsNumber } from 'class-validator';

export class ExpenseInputValidator {
  @IsNotEmpty()
  type: string;
  category: string;
  createdAt: string;
  @IsNumber()
  amount: number;
}
