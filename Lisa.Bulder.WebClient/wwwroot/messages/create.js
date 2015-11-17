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
        this.webApi.addMessage(message);
        window.location.replace('#/messages/overview/#');
    }
}