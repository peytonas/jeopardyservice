import Jeopardy from "../Models/Jeopardy.js";

//Private
let _state = {
    jeopardy: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
    jeopardy: []
}

function _setState(propName, data) {
    //NOTE add the data to the state
    _state[propName] = data
    //NOTE run every subscriber function that is watching that data
    _subscribers[propName].forEach(fn => fn());
}

//Public
export default class JeopardyService {
    //NOTE adds the subscriber function to the array based on the property it is watching

    get Jeopardy() {
        return _state.jeopardy
    }

    addSubscriber(propName, fn) {
        _subscribers[propName].push(fn)
    }

    getJeopardyByQuery(query) {
        let url = "http://jservice.io/api/clues" + query;
        $.getJSON(url)
            .then(res => {
                let results = res.results.map(rawData => new Jeopardy(rawData))
                _setState("jeopardy", results)
            })
            .catch(err => console.log(err))
    }
}
