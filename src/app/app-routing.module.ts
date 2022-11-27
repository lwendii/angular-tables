import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { OverviewComponent } from './overview/overview.component';
import { SimpleTableComponent } from './simple-table/simple-table.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: OverviewComponent },
  { path: "simple", component: SimpleTableComponent },
  { path: "dynamic", component: DynamicTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
