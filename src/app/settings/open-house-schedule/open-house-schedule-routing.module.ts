import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenHouseSchedulePage } from './open-house-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: OpenHouseSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenHouseSchedulePageRoutingModule {}
