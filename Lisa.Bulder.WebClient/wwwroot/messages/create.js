import {Services} from "lib/services";

export class Create extends Services {
    activate() {
        this.webApi.getChannels().then(response => {
            this.channels = response.content;
        });
        this.author = "author";
    }

    submit() {
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