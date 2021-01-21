import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../common.function";

@Component({
  selector: "app-open-house-schedule",
  templateUrl: "./open-house-schedule.page.html",
  styleUrls: ["./open-house-schedule.page.scss"],
})
export class OpenHouseSchedulePage implements OnInit {
  constructor(public config: CommonService) {}

  ngOnInit() {}

  goTo() {
    this.config.navigate("tabs/settings");
  }
}
