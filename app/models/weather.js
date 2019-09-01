export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = Math.floor(((data.main.temp - 273.15) * 1.8) + 32)
  }

  get Template() {
    return `
            <div class="card">
                <div class="card-body">
                    <h1>Weather</h1>
                    <h1 class="card-title">${this.city}</h1>
                    <h1 class="card-text">${this.fahrenheit}</h1>
                </div>
            </div>`
  }

}