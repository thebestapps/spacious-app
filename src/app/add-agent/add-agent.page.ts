import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.function";

@Component({
  selector: "app-add-agent",
  templateUrl: "./add-agent.page.html",
  styleUrls: ["./add-agent.page.scss"],
})
export class AddAgentPage implements OnInit {
  constructor(public config: CommonService) {}

  ngOnInit() {}

  Back() {
    this.config.navigate("tabs/settings");
  }
}
