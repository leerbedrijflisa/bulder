import {HttpClient} from "aurelia-http-client";

export class Create {
    activate() {
        //define web api url
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
        //fill variables 
        var message = {
            author: this.author,
            text: this.text,
            partitionKey: this.selectChannel
        };
        //web api config
        var webapi = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
            config.withHeader("Content-Type", "application/json");
        });

        RuleFor(x => x.Message).NotEmpty().NotNull().WithMessage("Required field");
        
        webapi.post("/messages", message);
        window.location.href = "#/messages/overview/#";
    }

}