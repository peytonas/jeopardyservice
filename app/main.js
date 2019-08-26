import JeopardyController from "./Controllers/JeopardyController.js";


class App {
    constructor() {
        this.controllers = {
            jeopardyController: new JeopardyController()
        }
    }
}

window['app'] = new App()