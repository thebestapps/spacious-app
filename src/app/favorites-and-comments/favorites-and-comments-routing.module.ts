import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoritesAndCommentsPage } from './favorites-and-comments.page';

const routes: Routes = [
  {
    path: '',
    component: FavoritesAndCommentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoritesAndCommentsPageRoutingModule {}
