let btn = document.querySelector('button.button');
let cityInput = document.querySelector('.input-text input');

const ENTER_KEY_CODE  = 13;


// test
cityInput.value = 'homel';
weatherForecast();
// end test

btn.addEventListener('click', () => {
    weatherForecast();
});

cityInput.addEventListener('keypress', (e) => {    
    if (e.keyCode == ENTER_KEY_CODE) {
       weatherForecast();
    }
});

function weatherForecast() {
    let city = getCity();

    weatherToday(city);
    weatherWeek(city);

}

function weatherToday(city) {
    let request = new XMLHttpRequest();
    let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=ef5ffdb295f9241df26ba3b904510af5';

    request.onreadystatechange = function () {
        let isRequestReady = request.readyState == 4;
        let isCityCorrect = isRequestReady && request.status == 200;
        let isCityIncorrect = isRequestReady && request.status == 404;
        let isFieldEmpty = isRequestReady == 4 && request.status == 400;

        if (isCityCorrect) {
            let responseJSON = request.responseText;
            let response = JSON.parse(responseJSON);
            
            console.log(response);            
            changeCity(response);
            changeWeatherToday(response);
            // hideError();
        } else if (isCityIncorrect) {
            // showError('You entered wrong city!');
        } else if (isFieldEmpty) {
            // showError('Enter something!');
        }
    }

    request.open('GET', url);
    request.send();
}

function weatherWeek(city) {
    let request = new XMLHttpRequest();
    let url = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=ef5ffdb295f9241df26ba3b904510af5';
    
    request.onreadystatechange = function () {
        let isRequestReady = request.readyState == 4;


        if (isRequestReady) {
            let responseJSON = request.responseText;
            let response = JSON.parse(responseJSON);
            
            // showDates(response);
            console.log(response);
        }
    }

    request.open('GET', url);
    request.send();
}

function getCity() {
    let cityName = cityInput.value;
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

