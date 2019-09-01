import TodoService from "../services/todo-service.js";


const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let template = `<ul>`
	let todos = _todoService.Todos
	todos.forEach((todo, index) => {

		template += todo.Template
	})
	document.getElementById('todos').innerHTML = template + `<div class="row">${_todoService.Remaining} Todos Remaining</div></ul>`

}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)

}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.todo.value

			//TODO build the todo object from the data that comes into this method
		}
		_todoService.addTodo(todo)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		// get the todo

		//set the completed = to the opposite of whatever it is currently.
		// get element by id.... we set the id = the todo's _id

		// if the todo.completed is true add the class .strikethrough
		// otherwise clear the classes from the element
		console.log(`Toggling todo ${todoId}`)
		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		console.log(todoId)
		_todoService.removeTodo(todoId)
	}



}
