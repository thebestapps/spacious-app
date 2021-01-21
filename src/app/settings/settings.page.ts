import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.function";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"],
})
export class SettingsPage implements OnInit {
  public form = [
    { val: "Open House", isChecked: true },
    { val: "Add Agent", isChecked: true },
    { val: "Push", isChecked: true },
    { val: "Email", isChecked: false },
    { val: "Text", isChecked: false },
    { val: "Feed Settings", isChecked: true },
    { val: "Group Settings", isChecked: false },
    { val: "Directions", isChecked: false },
    { val: "About", isChecked: false },
    { val: "Get Help", isChecked: true },
  ];
  constructor(public config: CommonService) {}

  ngOnInit() {}

  goTo(n) {
    if (n.val == "Push") {
      this.config.navigate("tabs/settings/push-notifications");
    }
    if (n.val == "Open House") {
      this.config.navigate("tabs/settings/open-house-schedule");
    }
    if (n.val == "Add Agent") {
      this.config.navigate("add-agent");
    }
  }
}
