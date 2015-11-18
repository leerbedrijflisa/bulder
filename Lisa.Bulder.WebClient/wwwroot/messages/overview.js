import {Services} from "lib/services";

export class Overview extends Services {
    //then() returns a promise
    activate() {
        this.webApi.getMessages().then(response => {
            this.messages = response.content;
        });;
    }
}