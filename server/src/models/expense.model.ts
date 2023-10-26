import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { UserModel } from './user.model';

export type ExpenseDocument = HydratedDocument<ExpenseModel>;

@Schema({
  timestamps: true,
})
export class ExpenseModel {
  @Prop()
  type: string;
  @Prop()
  amount: number;
  @Prop()
  category: string;
  @Prop()
  userId: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user: UserModel;
}

export const ExpenseSchema = SchemaFactory.createForClass(ExpenseModel);
