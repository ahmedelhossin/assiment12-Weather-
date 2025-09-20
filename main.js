var myHttp = new XMLHttpRequest()
var serchInput = document.querySelector(".searchchild .send-in")
var mainStuffs = ""
var today = document.querySelector(".today.day")
var day1 = document.querySelector(".one.day")
var day2 = document.querySelector(".two.day")
serchInput.addEventListener("input", function () {
    getCountry(serchInput.value)
})
function getCountry(country) {
    myHttp.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=3b78f46287004f25b62123847252009&q=${country}&days=3`)
    myHttp.send()
    myHttp.responseType = "json"
    myHttp.addEventListener("load", function () {
        if (myHttp.status == 200) {
            console.log(myHttp.response)
            display(myHttp.response)
        }
    })
}
function display(resp) {
    var cartonatoday = ""
    var cartonatomrrow = ""
    var cartonatomrrowplus = ""
    var date = new Date(resp.forecast.forecastday[0].date);
    var date1 = new Date(resp.forecast.forecastday[1].date);
    var date2 = new Date(resp.forecast.forecastday[2].date);
    var weekday = date.toLocaleDateString("en-US", { weekday: "long" });
    var weekday1 = date1.toLocaleDateString("en-US", { weekday: "long" });
    var weekday2 = date2.toLocaleDateString("en-US", { weekday: "long" });
    var dayNum = date.getDate();
    var month = date.toLocaleDateString("en-US", { month: "long" });
    cartonatoday += `  <div class="card text-center">
                        <div class="card-header bg-dark-subtle d-flex justify-content-between align-items-center">
                            <h2 class="fs-6 text-secondary">${weekday}</h2>
                            <h2 class="fs-6 text-secondary">${dayNum + month}</h2>
                        </div>
                        <div class="card-body bg-secondary">
                            <blockquote class="blockquote mb-0">
                                <p class="text-secondary">${resp.location.name}</p>
                                <h1 class="display-3 fw-bolder mb-4 text-light">${resp.current.temp_c}</h1>
                                <img src="${resp.current.condition.icon}" width="100">
                                <footer class="">
                                    <h6 class="mb-3 text-primary">${resp.current.condition.text}</h6>
                                    <div class="d-flex justify-content-center align-items-center text-secondary">
                                        <div class="d-flex justify-content-center align-items-center">
                                            <i class="fa-solid me-1 fa-umbrella"></i>
                                            <h6>${resp.forecast.forecastday[0].day.daily_chance_of_rain}%</h6>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center mx-3">
                                            <i class="fa-solid me-1 fa-wind"></i>
                                            <h6>${resp.current.wind_kph}km/h</h6>
                                        </div>
                                        <div class="d-flex justify-content-center align-items-center">
                                            <i class="fa-solid me-1 fa-down-long"></i>
                                            <h6>${resp.current.wind_dir}</h6>
                                        </div>
                                    </div>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>`
    cartonatomrrow += `<div class="card text-center">
                        <div class="card-header d-flex justify-content-center align-items-center">
                            <h2 class="fs-6 text-secondary">${weekday1}</h2>
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <img src="${resp.forecast.forecastday[1].day.condition.icon}" width="100">
                                <h2 class="fs-4 fw-bolder text-white mb-2">${resp.forecast.forecastday[1].day.maxtemp_c}</h1>
                                    <h3 class="fs-6 fw-medium text-white mb-4">${resp.forecast.forecastday[1].day.mintemp_c}</h1>
                                        <footer>
                                            <h6 class="mb-3 text-primary">${resp.forecast.forecastday[1].day.condition.text}</h6>
                                        </footer>
                            </blockquote>
                        </div>
                    </div>
    `
    cartonatomrrowplus += `<div class="card text-center">
                        <div class="card-header d-flex justify-content-center align-items-center">
                            <h2 class="fs-6 text-secondary">${weekday2}</h2>
                        </div>
                        <div class="card-body">
                            <blockquote class="blockquote mb-0">
                                <img src="${resp.forecast.forecastday[2].day.condition.icon}" width="100">
                                <h2 class="fs-4 fw-bolder text-white mb-2">${resp.forecast.forecastday[2].day.maxtemp_c}</h1>
                                    <h3 class="fs-6 fw-medium text-white mb-4">${resp.forecast.forecastday[2].day.mintemp_c}</h1>
                                        <footer>
                                            <h6 class="mb-3 text-primary">${resp.forecast.forecastday[2].day.condition.text}</h6>
                                        </footer>
                            </blockquote>
                        </div>
                    </div>
    `
    today.innerHTML = cartonatoday
    day1.innerHTML = cartonatomrrow
    day2.innerHTML = cartonatomrrowplus
}
// console.log(resp.forecast.forecastday[0].day.maxtemp_c)
// today.innerHTML = cartonatoday

