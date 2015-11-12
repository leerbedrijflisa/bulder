import {Services} from "lib/services";

export class Create extends Services {
    activate() {
        this.channels = this.webApi.channels;
        this.author = "author";
    }
    submit() {
        var message = {
            author: this.author,
            text: this.text,
            partitionKey: this.selectChannel
        };
        this.webApi.addMessage(message);
    }
}