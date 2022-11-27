import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  navigateToSimpleTable() {
    this.router.navigate(['/simple']);
  }
  navigateToDynamicTable() {
    this.router.navigate(['/dynamic']);
  }
}
