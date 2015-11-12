import {HttpClient} from "aurelia-http-client";

export class RealWebApi {
    constructor() {
        this.httpClient = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
            config.withHeader("Content-Type", "application/json");
        });
        this.messages = this.getMessages();
        this.channels = this.getChannels();
    }

    getChannels() {
        return this.httpClient.get("/channels").then(response => {
            return response.content;
        });
    }

    getMessages() {
        return this.httpClient.get("/messages").then(response => {
            return response.content;
        });
    }

    addMessage(message) {
        this.httpClient.post("/messages", message);
    }

    addUser(user) {
        this.httpClient.post("/users", user);
    }

    addChannel(channel) {
        this.httpClient.post("/channels", channel);
    }
}