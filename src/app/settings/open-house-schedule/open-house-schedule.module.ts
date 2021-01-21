import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenHouseSchedulePageRoutingModule } from './open-house-schedule-routing.module';

import { OpenHouseSchedulePage } from './open-house-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenHouseSchedulePageRoutingModule
  ],
  declarations: [OpenHouseSchedulePage]
})
export class OpenHouseSchedulePageModule {}
