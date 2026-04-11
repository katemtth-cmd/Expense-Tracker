import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ExpenseCategory } from "../../models/expenses";
import { ExpenseService } from "../../services/expenses/expenses";
import { Expenses } from "../../models/expenses";

@Component({
  selector: "app-expense-item",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./expense-item.html",
  styleUrls: ["./expense-item.css"],
})
export class ExpenseItemComponent {
  @Input() expense!: Expenses;

  constructor(private expenseService: ExpenseService) {}

  deleteExpense() {
    this.expenseService.deleteExpense(this.expense.id);
  }
}