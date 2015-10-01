import {HttpClient} from "aurelia-http-client";

export class List {
    activate() {
        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
        });

        webapi.get("/").then(response => {
            this.persons = response.content;
        });
    }
}