export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    // this.user = data.user
    this.description = data.description

  }

  get Template() {

    return `
      <li>
        <label id="${this._id}" class="${this.completed ? "strikethrough" : ''}">${this.description}</label>
        <input type="checkbox" ${this.completed ? 'checked="checked"' : ''} class="completed" onclick="app.controllers.todoController.toggleTodoStatus('${this._id}')" />
        <button class="delete x" onclick="app.controllers.todoController.removeTodo('${this._id}')">X</button>
      </li>
           
    `
  }
}