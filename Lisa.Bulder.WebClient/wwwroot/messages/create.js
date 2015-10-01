import {HttpClient} from "aurelia-http-client";

export class Create {
    submit() {
        var message = {
            author: this.author,
            text: this.text
        };

        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
        });

        webapi.post("/messages", message);
    }
}