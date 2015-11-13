import {HttpClient} from "aurelia-http-client";

export class RealWebApi {
    constructor() {
        this.httpClient = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
            config.withHeader("Content-Type", "application/json");
        });
    }

    getChannels() {
        return this.httpClient.get("/channels");
    }

    getMessages() {
        return this.httpClient.get("/messages");
    }

    addMessage(message) {
        return this.httpClient.post("/messages", message);
    }

    addUser(user) {
        return this.httpClient.post("/users", user);
    }

    addChannel(channel) {
        return this.httpClient.post("/channels", channel);
    }
}