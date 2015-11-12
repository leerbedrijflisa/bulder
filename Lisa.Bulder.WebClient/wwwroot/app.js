export class App {
    configureRouter(config, router) {
        config.map([
            {route: "users/create", moduleId: "users/create" },
            {route: "channels/create", moduleId: "channels/create" },
            {route: "channels/overview", moduleId: "channels/overview" },
            { route: "messages/create", moduleId: "messages/create" },
            { route: "messages/overview", moduleId: "messages/overview"}
        ])
    }
}   