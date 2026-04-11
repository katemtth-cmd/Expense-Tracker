import { Routes } from "@angular/router";
import { Dashboard } from "./components/dashboard/dashboard";
import { ExpenseListComponent } from "./components/expense-list/expense-list";
import { EditExpenseComponent } from "./components/edit-expense/edit-expense";
import { AddExpenseComponent } from "./components/add-expense/add-expense/add-expense";

export const routes: Routes = [ 
  {path: '', component: Dashboard},
  {path: 'add', component: AddExpenseComponent},
  {path: 'list', component: ExpenseListComponent},
  {path: 'edit/:id', component: EditExpenseComponent}
]