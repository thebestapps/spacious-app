import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.function";

@Component({
  selector: "app-favorites-and-comments",
  templateUrl: "./favorites-and-comments.page.html",
  styleUrls: ["./favorites-and-comments.page.scss"],
})
export class FavoritesAndCommentsPage implements OnInit {
  constructor(public config: CommonService) {}

  ngOnInit() {}

  goTo() {
    this.config.navigate("tabs/home");
  }
}
