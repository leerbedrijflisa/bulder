import {HttpClient} from "aurelia-http-client";

export class RealWebApi {
    constructor() {
        this.httpClient = new HttpClient().configure(config => {
            config.withBaseUrl("http://localhost:13693");
            config.withHeader("Content-Type", "application/json");
        });
    }

    //Channels
    getChannels() {
        return this.httpClient.get("/channels");
    }
    
    addChannel(channel) {
        return this.httpClient.post("/channels", channel);
    }

    //Messages
    getMessages() {
        return this.httpClient.get("/messages");
    }

    addMessage(message) {
        return this.httpClient.post("/messages", message);
    }

    //Users
    addUser(user) {
        return this.httpClient.post("/users", user);
    }
}