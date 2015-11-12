import {Services} from "lib/services";

export class Create extends Services {
    submit() {
        var user = {
            name: this.name
        };
        this.webApi.addUser(user);
    }
}