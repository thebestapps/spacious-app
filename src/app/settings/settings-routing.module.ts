import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPage } from './settings.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPage
  },
  {
    path: 'open-house-schedule',
    loadChildren: () => import('./open-house-schedule/open-house-schedule.module').then( m => m.OpenHouseSchedulePageModule)
  },
  {
    path: 'push-notifications',
    loadChildren: () => import('./push-notifications/push-notifications.module').then( m => m.PushNotificationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPageRoutingModule {}
