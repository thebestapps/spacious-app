import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesAndCommentsPageRoutingModule } from './favorites-and-comments-routing.module';

import { FavoritesAndCommentsPage } from './favorites-and-comments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesAndCommentsPageRoutingModule
  ],
  declarations: [FavoritesAndCommentsPage]
})
export class FavoritesAndCommentsPageModule {}
