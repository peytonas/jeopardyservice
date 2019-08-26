import JeopardyService from "../Services/JeopardyService.js";

//Private
let _JeopardyService = new JeopardyService()
function _draw() {
    let elem = document.getElementById("jeopardy")
    let jeopardy = _JeopardyService.Jeopardy
    let template = "<ul>"
    jeopardy.forEach(j => {
        template += j.Template
    })
    elem.innerHTML = template + "</ul>"
}

//Public
export default class JeopardyController {
    constructor() {
        //NOTE Register all subscribers
        _JeopardyService.addSubscriber("jeopardy", _draw)

        //NOTE Retrieve data
        _JeopardyService.getJeopardyByQuery("history")
    }
    search(e) {
        e.preventDefault();
        _JeopardyService.getJeopardyByQuery(e.target.query.value)
    }
}