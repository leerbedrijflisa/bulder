import {HttpClient} from "aurelia-http-client";

export class Create {
    submit() {
        var user = {
            name: this.name
        };

        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
        });

        webapi.post("/users", user);
    }
}