import {Services} from "lib/services";

export class Create extends Services {
    submit() {
        var channel = {
            partitionKey: this.Name,
            administrators: this.Administrators,
            authors: this.Administrators
        };

        this.webApi.addChannel(channel);
        window.location.href='#/channels/overview/#';
    }
}