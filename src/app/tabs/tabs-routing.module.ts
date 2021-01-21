import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("../home/home.module").then((m) => m.HomePageModule),
      },
      {
        path: "details",
        loadChildren: () =>
          import("../home/details/details.module").then(
            (m) => m.DetailsPageModule
          ),
      },
      {
        path: "settings",
        loadChildren: () =>
          import("../settings/settings.module").then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: "favorites",
        loadChildren: () =>
          import(
            "../favorites-and-comments/favorites-and-comments.module"
          ).then((m) => m.FavoritesAndCommentsPageModule),
      },
      {
        path: "sort",
        loadChildren: () =>
          import("../sort/sort.module").then((m) => m.SortPageModule),
      },
      {
        path: "",
        redirectTo: "/tabs/home",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/home",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
