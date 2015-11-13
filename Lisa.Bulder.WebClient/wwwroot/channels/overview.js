import {Services} from "lib/services";

export class Overview extends Services {
    activate() {
        this.webApi.getChannels().then(response => {
            this.channels = response.content;
        });
    }
}