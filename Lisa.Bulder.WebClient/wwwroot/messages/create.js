import {HttpClient} from "aurelia-http-client";

export class Create {
    activate() {

        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");

        });

        this.author = "author";

        //get all channels
        webapi.get("/channels").then(response => {
            this.channels = response.content;
        });
    }
    submit() {
        var message = {
            author: this.author,
            text: this.text,
            partitionKey: this.selectChannel
        };
        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
            config.withHeader("Content-Type", "application/json");
        });
        console.log(message);
        webapi.post("/messages", message);

    }

}