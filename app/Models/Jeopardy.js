export default class Jeopardy {
    constructor(data) {
        this.answer = data.answer
        this.question = data.question
        this.value = data.value
        this.category = data.category.title.
    }

    get Template() {
        return `
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">${this.answer}</h5>
            <p class="card-text">${this.question}</p>
        </div>
        </div>
        `
    }
}