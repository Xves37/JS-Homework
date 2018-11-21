function weatherView() {
    const city  = document.querySelector('.city');
    const week  = document.querySelector('.week');
    const today = document.querySelector('.today');

    function changeCity (response) {
        const cityName = response.name;
        const countryCode = response.sys.country;
        const coords = response.coord.lon + '; ' + response.coord.lat;

        const cityPattern = 
            '<h2 class="city-name">' +
                '<span class="name">' + cityName + '</span>,' +
                '<span class="country"> ' + countryCode + '</span>' +
            '</h2>' +
            '<div class="coords">(' + coords + ')</div>' +
            '<img class="flag" src="https://www.countryflags.io/' + countryCode + '/shiny/32.png"></img>';

        city.innerHTML = cityPattern;    
    }

    function changeWeatherToday(response) {
        const temp = Math.round(response.main.temp - 273.15);
        const date = (new Date).toString().slice(0,25);
        const desc = response.weather[0].description.toString()[0].toUpperCase() + response.weather[0].description.slice(1);
        const humidity = response.main.humidity;
        const pressure = response.main.pressure;
        const windSpeed = response.wind.deg;
        const clouds = response.clouds.all;
        const icon = parseImg(response.weather[0].icon);



        const weatherTodayPattern =
            '<header>' +
                '<div class="today-date">' + date + '</div>' +
            '</header>' +
            '<div class="today-weather">' +
                '<div class="today-main">' +
                    '<div class="temp-icon-wrap">' +
                        '<div class="today-temp">' + temp + '°C</div>' +
                        '<img class="today-icon" src="img/' + icon + '.png" alt="Weather Icon"></img>' +
                    '</div>' +
                    '<div class="today-description">' + desc + '</div>' +
                '</div>' +
                '<aside>' +
                    '<ul>' +
                        '<li class="humidity">' + humidity + '%</li>' +
                        '<li class="pressure">' + pressure + ' hPa</li>' +
                        '<li class="wind">' + windSpeed + ' m/s</li>' +
                        '<li class="clouds">' + clouds + '%</li>' +
                    '</ul>' +
                '</aside>' +
            '</div>';

        today.innerHTML = weatherTodayPattern;
    }

    // function createSelectedByDayPattern() {

    // }

    // function createSelectedByTimePattern() {
        
    // }

    // function changeSelectedWeather() {

    // }

    // <header>
    //     <ul class="timeline">
    //         <li class="time-1"></li>
    //         <li class="time-2"></li>
    //         <li class="time-3"></li>
    //         <li class="time-4"></li>
    //         <li class="time-5"></li>
    //         <li class="time-6"></li>
    //         <li class="time-7"></li>
    //         <li class="time-8"></li>
    //     </ul>
    // </header>
    // <div class="main-weather" data-time='9.00'>
    //     <div class="main-temp"></div>
    //     <div class="main-icon"></div>
    //     <br>
    //     <div class="main-description"></div>
    // </div>
    // <aside>
    //     <ul>
    //         <li class="humidity"></li>
    //         <li class="pressure"></li>
    //         <li class="wind"></li>
    //         <li class="clouds"></li>                        
    //     </ul>
    // </aside>

    // function changeWeek (response) {
    //     const fullWeekPattern = '';

    //     for (const i = 1; i < 6; i++) {

    //     }
    // }

    // function createDayPattern() {
    //     const dayPattern =
    //         '<div class="day-1">' +
    //             '<div class="day-and-data">' +
    //                 '<div class="day-name"></div>' +
    //                 '<div class="data"></div>' +
    //             '</div>' +
    //             '<div class="weather-little">' +
    //                 '<div class="week-temp"></div>' +
    //                 '<div class="week-icon"></div>' +
    //             '</div>' +
    //         '</div>';

    //     return dayPattern;
    // }

    function parseImg(iconCode) {
        if (iconCode == '03d' || iconCode == '03n' || iconCode == '04n' || iconCode == '04d') {
            return '03d';
        } else if (iconCode == '09d' || iconCode == '09n') {
            return '09d';
        } else if (iconCode == '10d' || iconCode == '10n') {
            return '10d';
        } else if (iconCode == '11d' || iconCode == '11n') {
            return '11d';
        } else if (iconCode == '13d' || iconCode == '13n') {
            return '13d';
        } else if (iconCode == '50d' || iconCode == '50n') {
            return '50d';
        } else {
            return iconCode;
        }
    }
    
    return {
        changeCity: changeCity,
        changeWeatherToday: changeWeatherToday
    }
}
