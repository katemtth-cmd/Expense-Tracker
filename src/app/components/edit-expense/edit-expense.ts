import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Expenses } from "../../models/expenses";
import { ExpenseService } from "../../services/expenses/expenses";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-add-expense",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./edit-expense.html",
  styleUrls: ["./edit-expense.css"]
})
export class EditExpenseComponent {
  expense!: Expenses; 

  constructor(
    public expenseService: ExpenseService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const found = this.expenseService.getExpenseById(id!);
    if (found) {
      this.expense = { ...found }; 
    } 
  }  
   save() {
      this.expenseService.updateExpense(this.expense);
      this.router.navigate(['/list']);
    }
}