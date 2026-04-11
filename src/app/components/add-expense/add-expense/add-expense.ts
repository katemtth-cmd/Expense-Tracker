import { Component, computed, inject } from '@angular/core';
import { ExpenseService } from '../../../services/expenses/expenses';
import { ExpenseCategory } from '../../../models/expenses';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.html',
  styleUrls: ['./add-expense.css'],
  imports: [FormsModule, RouterLink],
})
export class AddExpenseComponent {
  expenseService = inject(ExpenseService);

  expenses = computed(() => this.expenseService.expenses());

  title: string = '';
  amount: number = 0;
  category: ExpenseCategory = '' as unknown as ExpenseCategory;

  addExpense() {
    if (this.title && this.amount > 0 && this.category) {
      this.expenseService.addExpense({
        id: Date.now().toString(),
        title: this.title,
        amount: this.amount,
        category: this.category,
      });
    }
  }
}
