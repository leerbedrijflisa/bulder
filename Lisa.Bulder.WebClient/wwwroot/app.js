export class App {
    configureRouter(config, router) {
        config.map([
            { route: "", moduleId: "demo/list" },
            { route: "messages/create", moduleId: "messages/create" },
            { route: "messages/overview", moduleId: "messages/overview"}
        ])
    }
}   