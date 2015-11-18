export class FakeWebApi {

    getChannels() {
        return new Promise (function(resolve, reject) {
            resolve({ content :[
            { partitionKey: "Kanaal #1", administrators: "Max Verboom" }
            ]});
        });
    }

    getMessages() {
        return new Promise (function(resolve, reject) {
            resolve({ content :[
            { author: "Max Verboom", text: "Dit is een test-bericht."}
            ]});
        });
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