function weatherModel() {
    
    let view = weatherView();
    let city = cityInput;

    function showWeatherForecast() {
        let city = getCity();

        showWeatherToday(city);
    }

    function showWeatherToday(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ef5ffdb295f9241df26ba3b904510af5')
            .then(response => {
                return response.json();
            })
            .then(data => {                
                view.changeCity(data);
                view.changeWeatherToday(data);
            });
    }

    function getCity() {
        let cityName = city.value;
        cityName = deleteExtraSpaces(cityName);

        return cityName;
    }

    function deleteExtraSpaces(str) {
        let j = [];
        let newStr = str.split('');

        newStr.reduce( (last, element, i) => {
            if (last == element && element == ' ') j.push(i);
            return element;
        })
        for (let i = newStr.length - 1; i > 0; i--) {
            if (j.indexOf(i) != -1) newStr.splice(i,1);
        }

        return newStr.join('').trim();
    }

    return {
        showWeatherForecast: showWeatherForecast
    }

}
