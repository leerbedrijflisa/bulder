export class App {
    configureRouter(config, router) {
        config.map([
            { route: "messages/create", moduleId: "messages/create" },
            {route: "users/create", moduleId: "users/create" }
        ])
    }
}   