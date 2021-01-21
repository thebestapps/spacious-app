import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../common.function";
@Component({
  selector: "app-details",
  templateUrl: "./details.page.html",
  styleUrls: ["./details.page.scss"],
})
export class DetailsPage implements OnInit {
  constructor(public config: CommonService) {}

  ngOnInit() {}
  goTo() {
    this.config.navigate("tabs/home");
  }
}
