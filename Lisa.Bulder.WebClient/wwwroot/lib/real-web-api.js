import {HttpClient} from "aurelia-http-client";

export class RealWebApi {
    constructor() {
        this.httpClient = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
            config.withHeader("Content-Type", "application/json");
        });
        this.getMessages();
        this.getChannels();
    }

    getChannels() {
        this.httpClient.get("/channels").then(response => {
            this.channels = response.content;
            console.log("Dit moet als eerste gebeuren");
        });
    }

    getMessages() {
        this.httpClient.get("/messages").then(response => {
            this.messages = response.content;
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