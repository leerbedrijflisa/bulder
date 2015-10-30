import {HttpClient} from "aurelia-http-client";

export class Create {
    submit() {
        var channel = {
            PartitionKey: this.Name,
            Administrators: this.Administrators
        };

        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
        });

        webapi.post("/channels", channel);
    }
}