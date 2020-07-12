import { DashboardService } from './../../services/dashboard.service';
import { MobParts } from './../../models/mob-parts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [],
})
export class DashboardComponent implements OnInit {
  mobParts: any;
  constructor(private dashboardService: DashboardService) {
    // D.inj to create OBJ
    console.log('2 Constructor Block...!');
  }

  ngOnInit(): void {
    this.dashboardService
      .getMobParts()
      .subscribe((res) => (this.mobParts = res));
  }
  MobParts: MobParts[];
}
