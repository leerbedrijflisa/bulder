export class App {
    configureRouter(config, router) {
        config.map([
            { route: "messages/create", moduleId: "messages/create" },
            { route: "messages/overview", moduleId: "messages/overview"},
            {route: "users/create", moduleId: "users/create" }
        ])
    }
}   