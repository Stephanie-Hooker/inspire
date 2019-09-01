export default class Quote {
  constructor(data) {
    console.log('quote created')
    this.body = data.quote.body
    this.author = data.quote.author
  }

  get Template() {
    return `
            <div class="card">
                <div class="card-body">
                    <h1>Quote of the day</h1>
                    <h1 class="card-title">${this.body}</h1>
                    <h1 class="card-text">${this.author}</h1>
                </div>
            </div>`
  }
}