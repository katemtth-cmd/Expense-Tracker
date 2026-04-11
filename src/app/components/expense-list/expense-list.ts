import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { ExpenseService } from '../../services/expenses/expenses';
import { ExpenseItemComponent } from "../expense-item/expense-item";


@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule, ExpenseItemComponent],
  templateUrl: './expense-list.html',
  styleUrls: ['./expense-list.css'],
})
export class ExpenseListComponent {
  constructor(public expenseService: ExpenseService) {}

  expenses = computed(() => this.expenseService.expenses());

}
