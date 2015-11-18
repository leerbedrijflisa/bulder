import {Services} from "lib/services";

export class Create extends Services {
    activate() {
        this.webApi.getChannels().then(response => {
            this.channels = response.content;
        });
        this.author = "author";
    }

    submit(){
        var message = {
            author: this.author,
            text: this.text,
            partitionKey: this.selectChannel
        };

        //RuleFor(x => x.Message).NotEmpty().NotNull().WithMessage("Required field");
        
        this.webApi.addMessage(message);
        window.location.href = "#/messages/overview/#";
    }
}