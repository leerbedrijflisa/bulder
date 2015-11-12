export class FakeWebApi {
    constructor() {
        this.messages = this.getMessages();
        this.channels = this.getChannels();
        this.users = [];
    }

    getChannels() {
        return [
            { partitionKey: "Kanaal #1", administrators: "Max Verboom" }
        ];
    }

    getMessages() {
        return [
            { author: "Max Verboom", text: "Dit is een test-bericht."}
        ];
    }

    addMessage(message) {
        this.messages.push(message);
    }

    addUser(user) {
        this.users.push(user);
    }

    addChannel(channel) {
        this.channels.push(channel);
    }
}