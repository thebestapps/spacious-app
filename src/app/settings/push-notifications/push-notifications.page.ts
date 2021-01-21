import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../common.function";

@Component({
  selector: "app-push-notifications",
  templateUrl: "./push-notifications.page.html",
  styleUrls: ["./push-notifications.page.scss"],
})
export class PushNotificationsPage implements OnInit {
  public form = [
    {
      val: "New Listings",
      detail: "Allow Spacious to send you alerts on this device",
      isChecked: true,
    },
    {
      val: "Price Changes",
      detail: "Notify me when my favourite properties have price changes",
      isChecked: true,
    },
    {
      val: "New Tour Insights",
      detail: "Notify me when new tour insights arrive",
      isChecked: false,
    },
    {
      val: "Status Changes",
      detail: "Notify me when my saved properties Listing Status Changes",
      isChecked: true,
    },
  ];
  constructor(public config: CommonService) {}

  ngOnInit() {}

  goTo() {
    this.config.navigate("tabs/settings");
  }
}
