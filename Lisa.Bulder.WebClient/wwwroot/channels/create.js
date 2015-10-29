import {HttpClient} from "aurelia-http-client";

export class Create {
    submit() {
        var channel = {
            channel: this.channel,
        };

        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
        });

        webapi.post("/channels", channel);
    }
}