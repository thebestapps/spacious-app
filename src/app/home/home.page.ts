import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CommonService } from "../common.function";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  segmentModel = "rent";

  isClick: boolean = false;

  isClicked() {
    return this.isClick;
  }

  onClick() {
    this.isClick = !this.isClick;
  }
  constructor(public config: CommonService, public router: Router) {}

  navFilter() {
    this.router.navigate(["filter"]);
  }

  navSort() {
    this.router.navigate(["sort"]);
  }

  btnActivate(ionicButton) {
    if (ionicButton.color === "light") ionicButton.color = "danger";
    else ionicButton.color = "light";
  }

  goNavigateMore() {
    this.config.navigate("tabs/favorites");
  }

  openCard() {
    this.config.navigate("tabs/details");
  }

  sortPage() {
    this.config.navigate("tabs/sort");
  }
}
