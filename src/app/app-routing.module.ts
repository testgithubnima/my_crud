import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './my-form/my-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  { path: 'form', component: MyFormComponent },
  { path: 'form/:id', component: MyFormComponent}, // Route for editing
  { path: 'table', component: TableComponent },
  { path: '', redirectTo: '/table', pathMatch: 'full' } // Redirect to table by default
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
