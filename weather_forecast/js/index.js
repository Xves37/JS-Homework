const btn = document.querySelector('button.button');
const cityInput = document.querySelector('.input-text input');

const forecaster = weatherModel();

const ENTER_KEY_CODE  = 13;


// test
cityInput.value = 'homel';
forecaster.showWeatherForecast();
// end test

btn.addEventListener('click', () => {
    forecaster.showWeatherForecast();
});

cityInput.addEventListener('keypress', (e) => {    
    if (e.keyCode == ENTER_KEY_CODE) {
       forecaster.showWeatherForecast();
    }
});
