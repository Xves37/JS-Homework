function weatherModel(input) {
    
    let view = weatherView();
    let city = input;

    function showWeatherForecast() {
        let city = getCity();

        showWeatherToday(city);
    }

    function showWeatherToday(city) {
        let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ef5ffdb295f9241df26ba3b904510af5';

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {                
                view.changeCity(data);
                view.changeWeatherToday(data);
            });
    }
    
    autoComplete = debounce(() => {
        console.log(input.value);
    }, 200);

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

    function debounce(f, ms) {
        let timer = null;
      
        return function (...args) {
          const onComplete = () => {
            f.apply(this, args);
            timer = null;
          }
      
          if (timer) {
            clearTimeout(timer);
          }
      
          timer = setTimeout(onComplete, ms);
        };
    }

    return {
        showWeatherForecast: showWeatherForecast,
        autoComplete: autoComplete
    }

}
