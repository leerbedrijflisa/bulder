import {HttpClient} from "aurelia-http-client";

export class Overview {

    activate() {
        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
        });

        webapi.get("/channels").then(response => {
            this.channels = response.content;
        });
    }
}