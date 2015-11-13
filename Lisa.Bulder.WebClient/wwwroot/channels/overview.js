import {Services} from "lib/services";

export class Overview extends Services {
    activate() {
        this.channels = this.webApi.channels;
        console.log("Dit moet als laatste gebeuren");
    }
}