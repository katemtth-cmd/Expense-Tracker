import { computed, Injectable, signal } from '@angular/core';
import { Expenses, ExpenseCategory } from '../../models/expenses';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  //Signal that holds the list of expenses
  expenses = signal<Expenses[]>([]);

  //Signal holding the categories
  categories = signal<ExpenseCategory[]>([
    'Work',
    'Personal',
    'Utilities',
    'Grocery',
    'Shopping',
    'Travel',
    'Food',
  ]);

  totalExpense = computed(() => {
    return this.expenses().reduce((total, expense) => total + expense.amount, 0);
  });

  highestExpense = computed(() => {
    let max = 0;
    let highestExpense: Expenses | null = null;
    for (const expense of this.expenses()) {
      if (expense.amount > max) {
        max = expense.amount;
        highestExpense = expense;
      }
    }
    return highestExpense;
  });

  averageExpense = computed(() => {
    return this.expenses().length === 0 ? 0 : this.totalExpense() / this.expenses().length;
  });

  transactionCount = computed(() => this.expenses().length);

  addExpense(expense: Expenses) {
    return this.expenses.update((list) => [...list, expense]);
  }

  deleteExpense(id: string) {
    this.expenses.update((list) => list.filter((e) => e.id !== id));
  }

  getExpenseById(id: string): Expenses | undefined {
    return this.expenses().find((e) => e.id === id);
  }

  updateExpense(updated: Expenses) {
    this.expenses.update((list) => list.map((e) => (e.id === updated.id ? updated : e)));
  }
}
