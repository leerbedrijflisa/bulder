import {Services} from "lib/services";

export class Overview extends Services {
    activate() {
        this.messages = this.webApi.messages;
    }
}