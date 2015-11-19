export class App {
    configureRouter(config, router) {
        config.map([
            {route: "users/create", moduleId: "users/create", name: "users_create" },
            {route: "channels/create", moduleId: "channels/create", name: "channels_create" },
            {route: "channels/overview", moduleId: "channels/overview", name: "channels_overview" },
            { route: "messages/create", moduleId: "messages/create", name: "messages_create" },
            { route: "messages/overview", moduleId: "messages/overview", name: "messages_overview"},
            { route: "login", moduleId: "security/login", name: "login" }
        ])
    }
}   