import Todo from "../models/todo.js";

//NOTE your service is all set up for the observer pattern but there is still work to be done

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/Stephanie/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())
}

export default class TodoService {
	get TodoError() {
		return _state.error
	}

	get Todos() {
		return _state.todos.map(item => new Todo(item))
	}

	// create a counter to hold value
	// foreach over todos
	// // if todo.complete == false increment counter
	// return counter;
	get Remaining() {
		let remainingTodos = 0;
		this.Todos.forEach((todo, index) => {
			if (todo.completed === false) {
				remainingTodos++
			}
		})
		return remainingTodos;
	}


	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log(res)
				//TODO Handle this response from the server
				let result = res.data.data
				_setState('todos', result)
			})
			.catch(err => _setState('error', err))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				let copyTodo = this.Todos
				copyTodo.push(new Todo(res.data.data))
				_setState('todos', copyTodo)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		if (!todo) {
			alert("could not find todo")
			return false
		}
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(res => {
				this.getTodos()
				//TODO do you care about this data? or should you go get something else?
				_setState('todos', _state.todos)
			})
			.catch(err => _setState('error', err))
	}

	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				_state.todos.splice(todoId, 1)
				_setState('todos', _state.todos)
			})
			.catch(err => {
				console.error(err)
			})
		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
	}
}