import { Component, OnInit } from "@angular/core";
import { APP_CONSTANTS } from "../../assets/here.constants";

@Component({
  selector: "demo-page",
  templateUrl: "./demo-page.component.html",
  styleUrls: ["./demo-page.component.sass"]
})
export class DemoPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    this.generateNewMap();
  }

  generateNewMap() {
    var platform = new H.service.Platform({
      app_id: APP_CONSTANTS.APP_ID,
      app_code: APP_CONSTANTS.APP_CODE
    });

    // Obtain the default map types from the platform object
    var maptypes = platform.createDefaultLayers();

    // Instantiate (and display) a map object:
    var map = new H.Map(
      document.getElementById("mapContainer"),
      maptypes.normal.map,
      {
        zoom: 10,
        center: { lng: -0.3, lat: 39.51 }
      }
    );
  }
}
