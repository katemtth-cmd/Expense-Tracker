export type ExpenseCategory = 
  | 'Work'
  | 'Personal'
  | 'Utilities'
  | 'Grocery'
  | 'Shopping'
  | 'Travel'
  | 'Food';
export interface Expenses {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
}
