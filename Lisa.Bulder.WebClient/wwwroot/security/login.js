import {Services} from "lib/services";

export class Login extends Services {
    submit() {
        var auth = {
            email: this.email,
            password: this.password
        };
        console.log(auth);
    }
}
