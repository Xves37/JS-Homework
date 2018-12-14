const btn = document.querySelector('button.button');
const cityInput = document.querySelector('.input-text input');

const forecaster = weatherModel(cityInput);

const ENTER_KEY_CODE  = 13;


// test
// cityInput.value = 'homel';
// forecaster.showWeatherForecast();
// end test

btn.addEventListener('click', () => {
    forecaster.showWeatherForecast();
});

cityInput.addEventListener('keypress', (event) => {
    if (event.keyCode == ENTER_KEY_CODE) {
       forecaster.showWeatherForecast();
    }
});

cityInput.addEventListener('keyup', () => {     
    forecaster.autoComplete(); 
});