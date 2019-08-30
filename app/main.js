import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController()
    }
  }
}

window['app'] = new App()  