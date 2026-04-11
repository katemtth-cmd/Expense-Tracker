import { CommonModule } from '@angular/common';
import { Component, computed, Signal } from '@angular/core';
import { ExpenseService } from '../../services/expenses/expenses';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
 constructor(public expenseService: ExpenseService) {}

 totalExpense: Signal<number> = computed(() => this.expenseService.totalExpense());
 highestExpense: Signal<number> = computed(() => this.expenseService.highestExpense()?.amount || 0);
 averageExpense: Signal<number> = computed(() => this.expenseService.averageExpense());
 transactionCount: Signal<number> = computed(() => this.expenseService.transactionCount());
}
