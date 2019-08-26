export default class Jeopardy {
    constructor(data) {
        this.title = data.title
    }

    get Template() {
        return this.title
    }
}