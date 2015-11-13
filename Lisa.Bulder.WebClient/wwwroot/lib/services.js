import {FakeWebApi} from "lib/fake-web-api";
import {RealWebApi} from "lib/real-web-api";

export class Services {
    static inject() {
        return [RealWebApi];
    }
    constructor(webApi) {
        this.webApi = webApi;
    }
}