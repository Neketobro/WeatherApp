//to do list
//  1. Setting panel +
//  2. Switch theme +
//  3. API for weather +
//  4. Search city for weather
//  5. Current location

//  SETTING PANEL OPEN/CLOSE
document.addEventListener('DOMContentLoaded', function() {
    const settingChecbox = document.getElementById('setting');
    const settingWrapper = document.querySelector('.setting-wrapper');

    settingChecbox.addEventListener('change', function() {
        if (settingChecbox.checked) {
            settingWrapper.classList.add('active');
        } else {
            settingWrapper.classList.remove('active');
        }
    });
});

//SWITCH THEME
document.addEventListener('DOMContentLoaded', function() {
    const switchTheme = document.getElementById('switchTheme');
    const switchItem = document.querySelector('.switchTheme-item');

    switchTheme.addEventListener('change', function() {
        if (switchTheme.checked) {
            switchItem.classList.add('active');
        } else {
            switchItem.classList.remove('active');
        }
    });

    const root = document.documentElement;

    switchTheme.addEventListener('change', function() {
        if (switchTheme.checked) {
            // Застосовуємо кольори для світлої теми
            root.style.setProperty('--text-color', '#ffffff');
            root.style.setProperty('--background-color', '#1d1c2c');
            root.style.setProperty('--background-light-gray', '#1d1c2c');
            root.style.setProperty('--background-medium-gray', '#06050a');
            root.style.setProperty('--border-color', '#0c0b12');
            root.style.setProperty('--shadow-color-first', '#0c0b12');
            root.style.setProperty('--shadow-color-second', '#2e2d46');
            root.style.setProperty('--background-first-for-item', '#ff9900');
            root.style.setProperty('--background-second-for-item', '#f5b94a3f');
        } else {
            // Застосовуємо кольори для темної теми
            root.style.setProperty('--text-color', '#000000');
            root.style.setProperty('--background-color', '#e0e0e0');
            root.style.setProperty('--background-light-gray', '#e0e0e0');
            root.style.setProperty('--background-medium-gray', '#777777');
            root.style.setProperty('--border-color', '#b4b4b4');
            root.style.setProperty('--shadow-color-first', '#666666');
            root.style.setProperty('--shadow-color-second', '#ffffff');
            root.style.setProperty('--background-first-for-item', '#ffd900');
            root.style.setProperty('--background-second-for-item', '#ffa6003f');
        }
    });

});

//WEATHER API
//Time
function digitalClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let string = hours + ":" + minutes;

    document.getElementById('wrapperLocationTime').innerHTML = string;
} setInterval(digitalClock, 1000);

//Date
function digitalDate() {
    let now = new Date();
    let day = now.getDate();

    let dayOfWeek = now.getDay(); // получение дня недели (0-6)
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let dayName = days[dayOfWeek]; // получение названия дня недели

    let month = now.toLocaleString('en-US', { month: 'short' });
//  console.log(month); // Например: "Sep"  

    dayName = dayName < 10 ? "0" + dayName : dayName;
    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    let string = dayName + ", " + day + " " + month;

    document.getElementById('wrapperLocationDate').innerHTML = string;
} setInterval(digitalDate, 2000);


//wrapper 1
const wrapperLocationCity = document.getElementById('wrapperLocationCity');
const wrapperLocationTime = document.getElementById('wrapperLocationTime');
const wrapperLocationDate = document.getElementById('wrapperLocationDate');

//wrapper 2
const statusTemperature = document.getElementById('statusTemperature');
const statusFeelsTemperature = document.getElementById('statusFeelsTemperature');
const statusSunrise = document.getElementById('statusSunrise');
const statusSunset = document.getElementById('statusSunset');
const statusBlockImgStatus = document.getElementById('statusBlockImgStatus');
const statusBlockStatus = document.getElementById('statusBlockStatus');
const statusHumidity = document.getElementById('statusHumidity');
const statusPressure = document.getElementById('statusPressure');
const statusWindSpeed = document.getElementById('statusWindSpeed');

//wrapper 3
const daysItemDate1 = document.getElementById('daysItemDate1');
const daysItemTemp1 = document.getElementById('daysItemTemp1');
const daysItemIcon1 = document.getElementById('daysItemIcon1');

const daysItemDate2 = document.getElementById('daysItemDate2');
const daysItemTemp2 = document.getElementById('daysItemTemp2');
const daysItemIcon2 = document.getElementById('daysItemIcon2');

const daysItemDate3 = document.getElementById('daysItemDate3');
const daysItemTemp3 = document.getElementById('daysItemTemp3');
const daysItemIcon3 = document.getElementById('daysItemIcon3');

const daysItemDate4 = document.getElementById('daysItemDate4');
const daysItemTemp4 = document.getElementById('daysItemTemp4');
const daysItemIcon4 = document.getElementById('daysItemIcon4');

const daysItemDate5 = document.getElementById('daysItemDate5');
const daysItemTemp5 = document.getElementById('daysItemTemp5');
const daysItemIcon5 = document.getElementById('daysItemIcon5');

//wrapper 4
const itemTime1 = document.getElementById('itemTime1');
const itemTime2 = document.getElementById('itemTime2');
const itemTime3 = document.getElementById('itemTime3');
const itemTime4 = document.getElementById('itemTime4');
const itemTime5 = document.getElementById('itemTime5');

const itemBlockTemp1 = document.getElementById('itemTemp1');
const itemBlockTemp2 = document.getElementById('itemTemp2');
const itemBlockTemp3 = document.getElementById('itemTemp3');
const itemBlockTemp4 = document.getElementById('itemTemp4');
const itemBlockTemp5 = document.getElementById('itemTemp5');

const itemBlockSpeedWind1 = document.getElementById('itemBlockSpeedWind1');
const itemBlockSpeedWind2 = document.getElementById('itemBlockSpeedWind2');
const itemBlockSpeedWind3 = document.getElementById('itemBlockSpeedWind3');
const itemBlockSpeedWind4 = document.getElementById('itemBlockSpeedWind4');
const itemBlockSpeedWind5 = document.getElementById('itemBlockSpeedWind5');

//search
let searchField = '';
let btnSearch = document.getElementById('btnSearch').addEventListener('click', function search() {
    searchField = document.getElementById('search').value;
    loadWeather(searchField);
});

//Current Location
let latitude = '';
let longitude = '';
navigator.geolocation.getCurrentPosition(
    function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        currentWeatherLocation(latitude);
        currentWeatherLocation(longitude);
    }
);
//weather API Current
async function currentWeatherLocation(e) {
    let serverCurrent =`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=73987a53a669537328a8886b25210e04`; // lat=${latitude}&lon=${longitude}
    const responseCurrent = await fetch(serverCurrent, {
        method: 'GET',
    });
    const responseResultCurrent = await responseCurrent.json();

    if (responseCurrent.ok) {
        getCurrentLocationWeather(responseResultCurrent);
    } else {
        arrayWearther.innerHTML = responseResultCurrent.message;
    };
};

function getCurrentLocationWeather(dataCurrent) {
    searchField = dataCurrent.name;
    loadWeather(searchField);
};

const btnCurrent = document.getElementById('btnCurrent').addEventListener('click', function(){
    if (btnCurrent) {
        console.warn('error location');
    } else {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                currentWeatherLocation(latitude);
                currentWeatherLocation(longitude);
            }
        );
    };
});

//Api
let arrayWearther = [wrapperLocationCity, wrapperLocationTime, wrapperLocationDate, statusTemperature, statusFeelsTemperature, statusSunrise, statusSunset, statusBlockImgStatus, statusBlockStatus, statusHumidity, statusPressure, statusWindSpeed, daysItemDate1, daysItemDate2, daysItemDate3, daysItemDate4, daysItemDate5, daysItemTemp1, daysItemTemp2, daysItemTemp3, daysItemTemp4, daysItemTemp5, daysItemIcon1, daysItemIcon2, daysItemIcon3, daysItemIcon4, daysItemIcon5];

//Loading
async function loadWeather(e) {
    arrayWearther[0].innerHTML = ` 
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // wrapperLocationCity
    arrayWearther[1].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // wrapperLocationTime
    arrayWearther[2].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // wrapperLocationDate
    arrayWearther[3].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusTemperature
    arrayWearther[4].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusFeelsTemperature
    arrayWearther[5].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusSunrise
    arrayWearther[6].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusSunset
    arrayWearther[7].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusBlockStatus
    arrayWearther[8].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusBlockImgStatus
    arrayWearther[9].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusHumidity
    arrayWearther[10].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusPressure
    arrayWearther[11].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // statusWindSpeed
    arrayWearther[12].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemDate1
    arrayWearther[13].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemDate2
    arrayWearther[14].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemDate3
    arrayWearther[15].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemDate4
    arrayWearther[16].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemDate5
    arrayWearther[17].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemTemp1
    arrayWearther[18].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemTemp2
    arrayWearther[19].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemTemp3
    arrayWearther[20].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemTemp4
    arrayWearther[21].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemTemp5
    arrayWearther[22].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemIcon1
    arrayWearther[23].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemIcon2
    arrayWearther[24].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemIcon3
    arrayWearther[25].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemIcon4
    arrayWearther[26].innerHTML = `
        <div class="block-loading">
            <div class="loading"></div>
        </div>`; // daysItemIcon5

    //weather API for Update 3 hours
        let server = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${searchField}&cnt=40&appid=73987a53a669537328a8886b25210e04`; // example - Kyiv, Dnipro, Leskovac
        const response = await fetch(server, {
            method: 'GET',
        });
        const responseResult = await response.json();

        if (response.ok) {
            getWeather(responseResult);
        } else {
            arrayWearther.innerHTML = responseResult.message;
        };

        //weather API Now
        let serverNow =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${searchField}&appid=73987a53a669537328a8886b25210e04`;        // example - Kyiv, Dnipro, Leskovac
        const responseNow = await fetch(serverNow, {
            method: 'GET',
        });
        const responseResultNow = await responseNow.json();

        if (responseNow.ok) {
            getWeatherNow(responseResultNow);
        } else {
            arrayWearther.innerHTML = responseResultNow.message;
        };

};

function getWeather(data) {    

    const timeArrayFor1 = data.list[1].dt_txt;
    const timeFor1 = timeArrayFor1.substring(11, 16); 
    const templateItemTime1 = `
        <div id="itemTime1" class="times-item-time">${timeFor1}</div>`;
        itemTime1.innerHTML = templateItemTime1;

    const timeArrayFor2 = data.list[2].dt_txt;
    const timeFor2 = timeArrayFor2.substring(11, 16); 
    const templateItemTime2 = `
        <div id="itemTime2" class="times-item-time">${timeFor2}</div>`;
        itemTime2.innerHTML = templateItemTime2;

    const timeArrayFor3 = data.list[3].dt_txt;
    const timeFor3 = timeArrayFor3.substring(11, 16); 
    const templateItemTime3 = `
        <div id="itemTime3" class="times-item-time">${timeFor3}</div>`;
        itemTime3.innerHTML = templateItemTime3;

    const timeArrayFor4 = data.list[4].dt_txt;
    const timeFor4 = timeArrayFor4.substring(11, 16); 
    const templateItemTime4 = `
        <div id="itemTime4" class="times-item-time">${timeFor4}</div>`;
        itemTime4.innerHTML = templateItemTime4;

    const timeArrayFor5 = data.list[5].dt_txt;
    const timeFor5 = timeArrayFor5.substring(11, 16); 
    const templateItemTime5 = `
        <div id="itemTime5" class="times-item-time">${timeFor5}</div>`;
        itemTime5.innerHTML = templateItemTime5;
    
    const iconStatus1 = data.list[1].weather[0].icon;
    const iconStatus2 = data.list[2].weather[0].icon;
    const iconStatus3 = data.list[3].weather[0].icon;
    const iconStatus4 = data.list[4].weather[0].icon;
    const iconStatus5 = data.list[5].weather[0].icon;

    const itemTemp1 = Math.round(data.list[1].main.temp);
    const itemTemp2 = Math.round(data.list[2].main.temp);
    const itemTemp3 = Math.round(data.list[3].main.temp);
    const itemTemp4 = Math.round(data.list[4].main.temp);
    const itemTemp5 = Math.round(data.list[5].main.temp);

    const itemWindSpeed1 = Math.round(data.list[1].wind.speed);
    const itemWindSpeed2 = Math.round(data.list[2].wind.speed);
    const itemWindSpeed3 = Math.round(data.list[3].wind.speed);
    const itemWindSpeed4 = Math.round(data.list[4].wind.speed);
    const itemWindSpeed5 = Math.round(data.list[5].wind.speed);
    
    //statusBlockIconStatus1
    const iconItem1 = function funcStatusIconItem(iconStatus1) {
        let pathIcon = '';
        
        if (iconStatus1 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (iconStatus1 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (iconStatus1 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus1 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus1 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus1 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus1 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus1 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (iconStatus1 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (iconStatus1 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (iconStatus1 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus1 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus1 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus1 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus1 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus1 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
    
        const iconItemBlock1 = document.getElementById('iconItemBlock1');
        iconItemBlock1.src = pathIcon;
        iconItemBlock1.alt = '';
    };
    iconItem1(iconStatus1);

    //statusBlockIconStatus2
    const iconItem2 = function funcStatusIconItem2(iconStatus2) {
        let pathIcon = '';
        
        if (iconStatus2 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (iconStatus2 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (iconStatus2 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus2 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus2 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus2 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus2 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus2 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (iconStatus2 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (iconStatus2 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (iconStatus2 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus2 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus2 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus2 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus2 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus2 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
    
        const iconItemBlock2 = document.getElementById('iconItemBlock2');
        iconItemBlock2.src = pathIcon;
        iconItemBlock2.alt = '';
    };
    iconItem2(iconStatus2);

    //statusBlockIconStatus3
    const iconItem3 = function funcStatusIconItem3(iconStatus3) {
        let pathIcon = '';
        
        if (iconStatus3 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (iconStatus3 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (iconStatus3 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus3 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus3 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus3 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus3 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus3 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (iconStatus3 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (iconStatus3 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (iconStatus3 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus3 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus3 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus3 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus3 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus3 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
    
        const iconItemBlock3 = document.getElementById('iconItemBlock3');
        iconItemBlock3.src = pathIcon;
        iconItemBlock3.alt = '';
    };
    iconItem3(iconStatus3);

    //statusBlockIconStatus4
    const iconItem4 = function funcStatusIconItem4(iconStatus4) {
        let pathIcon = '';
        
        if (iconStatus4 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (iconStatus4 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (iconStatus4 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus4 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus4 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus4 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus4 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus4 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (iconStatus4 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (iconStatus4 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (iconStatus4 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus4 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus4 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus4 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus4 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus4 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
    
        const iconItemBlock4 = document.getElementById('iconItemBlock4');
        iconItemBlock4.src = pathIcon;
        iconItemBlock4.alt = '';
    };
    iconItem4(iconStatus4);

    //statusBlockIconStatus5
    const iconItem5 = function funcStatusIconItem3(iconStatus5) {
        let pathIcon = '';
        
        if (iconStatus5 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (iconStatus5 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (iconStatus5 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus5 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus5 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus5 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus5 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus5 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (iconStatus5 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (iconStatus5 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (iconStatus5 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus5 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (iconStatus5 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus5 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (iconStatus5 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (iconStatus5 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
    
        const iconItemBlock5 = document.getElementById('iconItemBlock5');
        iconItemBlock5.src = pathIcon;
        iconItemBlock5.alt = '';
    };
    iconItem5(iconStatus5);

    const templateItemTemp1 = `
        <div id="itemTemp1" class="times-item-temp">${itemTemp1}&deg;C</div>`;
        itemBlockTemp1.innerHTML = templateItemTemp1;
    const templateItemTemp2 = `
        <div id="itemTemp2" class="times-item-temp">${itemTemp2}&deg;C</div>`;
        itemBlockTemp2.innerHTML = templateItemTemp2;
    const templateItemTemp3 = `
        <div id="itemTemp3" class="times-item-temp">${itemTemp3}&deg;C</div>`;
        itemBlockTemp3.innerHTML = templateItemTemp3;
    const templateItemTemp4 = `
        <div id="itemTemp4" class="times-item-temp">${itemTemp4}&deg;C</div>`;
        itemBlockTemp4.innerHTML = templateItemTemp4;
    const templateItemTemp5 = `
        <div id="itemTemp5" class="times-item-temp">${itemTemp5}&deg;C</div>`;
        itemBlockTemp5.innerHTML = templateItemTemp5;

    const templateSpeedWind1 = `
        <div id="itemBlockSpeedWind1" class="times-item-speed-wind">${itemWindSpeed1}km/h</div>`;
        itemBlockSpeedWind1.innerHTML = templateSpeedWind1;
    const templateSpeedWind2 = `
        <div id="itemBlockSpeedWind2" class="times-item-speed-wind">${itemWindSpeed2}km/h</div>`;
        itemBlockSpeedWind2.innerHTML = templateSpeedWind2;
    const templateSpeedWind3 = `
        <div id="itemBlockSpeedWind3" class="times-item-speed-wind">${itemWindSpeed3}km/h</div>`;
        itemBlockSpeedWind3.innerHTML = templateSpeedWind3;
    const templateSpeedWind4 = `
        <div id="itemBlockSpeedWind4" class="times-item-speed-wind">${itemWindSpeed4}km/h</div>`;
        itemBlockSpeedWind4.innerHTML = templateSpeedWind4;
    const templateSpeedWind5 = `
        <div id="itemBlockSpeedWind5" class="times-item-speed-wind">${itemWindSpeed5}km/h</div>`;
        itemBlockSpeedWind5.innerHTML = templateSpeedWind5;


function formatUnixDate(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    const options = { weekday: 'long', day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }
  const daysDate1 = data.list[8].dt;
  const daysDate2 = data.list[16].dt;
  const daysDate3 = data.list[24].dt;
  const daysDate4 = data.list[32].dt;
  const daysDate5 = data.list[39].dt;
  const daysItemDate1 = document.getElementById('daysItemDate1');
  const daysItemDate2 = document.getElementById('daysItemDate2');
  const daysItemDate3 = document.getElementById('daysItemDate3');
  const daysItemDate4 = document.getElementById('daysItemDate4');
  const daysItemDate5 = document.getElementById('daysItemDate5');

    const daysTemp1 = Math.round(data.list[8].main.temp);
    const daysTemp2 = Math.round(data.list[16].main.temp);
    const daysTemp3 = Math.round(data.list[24].main.temp);
    const daysTemp4 = Math.round(data.list[32].main.temp);
    const daysTemp5 = Math.round(data.list[39].main.temp);
    const daysItemTemp1 = document.getElementById('daysItemTemp1');
    const daysItemTemp2 = document.getElementById('daysItemTemp2');
    const daysItemTemp3 = document.getElementById('daysItemTemp3');
    const daysItemTemp4 = document.getElementById('daysItemTemp4');
    const daysItemTemp5 = document.getElementById('daysItemTemp5');

    const daysIcon1 = data.list[8].weather[0].icon;
    const daysIcon2 = data.list[16].weather[0].icon;
    const daysIcon3 = data.list[24].weather[0].icon;
    const daysIcon4 = data.list[32].weather[0].icon;
    const daysIcon5 = data.list[39].weather[0].icon;
    
    //daysItemIcon1
    const daysItemicon1 = function funcdaysIcon1(daysIcon1) {
        let pathIcon = '';
        
        if (daysIcon1 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (daysIcon1 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (daysIcon1 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon1 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon1 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon1 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon1 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon1 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (daysIcon1 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (daysIcon1 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (daysIcon1 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon1 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon1 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon1 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon1 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon1 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
        const block = document.getElementById('daysItemIcon1');
        block.src = pathIcon;
        block.alt = '';
    };
    daysItemicon1(daysIcon1);

    //daysItemIcon2
    const daysItemicon2 = function funcdaysIcon2(daysIcon2) {
        let pathIcon = '';
        
        if (daysIcon2 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (daysIcon2 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (daysIcon2 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon2 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon2 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon2 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon2 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon2 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (daysIcon2 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (daysIcon2 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (daysIcon2 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon2 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon2 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon2 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon2 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon2 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
        const block = document.getElementById('daysItemIcon2');
        block.src = pathIcon;
        block.alt = '';
    };
    daysItemicon2(daysIcon2);

    //daysItemIcon3
    const daysItemicon3 = function funcdaysIcon3(daysIcon3) {
        let pathIcon = '';
        
        if (daysIcon3 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (daysIcon3 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (daysIcon3 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon3 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon3 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon3 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon3 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon3 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (daysIcon3 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (daysIcon3 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (daysIcon3 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon3 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon3 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon3 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon3 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon3 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
        const block = document.getElementById('daysItemIcon3');
        block.src = pathIcon;
        block.alt = '';
    };
    daysItemicon3(daysIcon3);

    //daysItemIcon4
    const daysItemicon4 = function funcdaysIcon4(daysIcon4) {
        let pathIcon = '';
        
        if (daysIcon4 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (daysIcon4 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (daysIcon4 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon4 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon4 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon4 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon4 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon4 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (daysIcon4 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (daysIcon4 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (daysIcon4 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon4 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon4 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon4 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon4 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon4 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
        const block = document.getElementById('daysItemIcon4');
        block.src = pathIcon;
        block.alt = '';
    };
    daysItemicon4(daysIcon4);

    //daysItemIcon5
    const daysItemicon5 = function funcdaysIcon5(daysIcon5) {
        let pathIcon = '';
        
        if (daysIcon5 === '01d') {
            pathIcon = 'icons/weather/icon-sun.png';
        } else if (daysIcon5 === '02d') {
            pathIcon = 'icons/weather/icon-cloudy.png';
        } else if (daysIcon5 === '03d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon5 === '04d') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon5 === '09d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon5 === '10d') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon5 === '11d') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon5 === '13d') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else if (daysIcon5 === '01n') {
            pathIcon = 'icons/weather/icon-night.png';
        } else if (daysIcon5 === '02n') {
            pathIcon = 'icons/weather/icon-night-cloud.png';
        } else if (daysIcon5 === '03n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon5 === '04n') {
            pathIcon = 'icons/weather/icon-cloud.png';
        } else if (daysIcon5 === '09n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon5 === '10n') {
            pathIcon = 'icons/weather/icon-rainy.png';
        } else if (daysIcon5 === '11n') {
            pathIcon = 'icons/weather/icon-storm.png';
        } else if (daysIcon5 === '13n') {
            pathIcon = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }
        const block = document.getElementById('daysItemIcon5');
        block.src = pathIcon;
        block.alt = '';
    };
    daysItemicon5(daysIcon5);

    const templateDaysTemp1 = `
        <div id="daysItemTemp1" class="days-item-temp">${daysTemp1}&deg;C</div>`;
        daysItemTemp1.innerHTML = templateDaysTemp1;
    const templateDaysTemp2 = `
        <div id="daysItemTemp2" class="days-item-temp">${daysTemp2}&deg;C</div>`;
        daysItemTemp2.innerHTML = templateDaysTemp2;
    const templateDaysTemp3 = `
        <div id="daysItemTemp3" class="days-item-temp">${daysTemp3}&deg;C</div>`;
        daysItemTemp3.innerHTML = templateDaysTemp3;
    const templateDaysTemp4 = `
        <div id="daysItemTemp4" class="days-item-temp">${daysTemp4}&deg;C</div>`;
        daysItemTemp4.innerHTML = templateDaysTemp4;
    const templateDaysTemp5 = `
        <div id="daysItemTemp5" class="days-item-temp">${daysTemp5}&deg;C</div>`;
        daysItemTemp5.innerHTML = templateDaysTemp5;


    const templatedaysDate1 = `
        <div id="daysItemDate1" class="days-item-date">${formatUnixDate(daysDate1)}</div>`;
        daysItemDate1.innerHTML = templatedaysDate1;
    const templatedaysDate2 = `
        <div id="daysItemDate2" class="days-item-date">${formatUnixDate(daysDate2)}</div>`;
        daysItemDate2.innerHTML = templatedaysDate2;
    const templatedaysDate3 = `
        <div id="daysItemDate3" class="days-item-date">${formatUnixDate(daysDate3)}</div>`;
        daysItemDate3.innerHTML = templatedaysDate3;
    const templatedaysDate4 = `
        <div id="daysItemDate4" class="days-item-date">${formatUnixDate(daysDate4)}</div>`;
        daysItemDate4.innerHTML = templatedaysDate4;
    const templatedaysDate5 = `
        <div id="daysItemDate5" class="days-item-date">${formatUnixDate(daysDate4)}</div>`;
        daysItemDate5.innerHTML = templatedaysDate5;

};

function getWeatherNow(dataNow) {

    const location = dataNow.name;
    const temp = Math.round(dataNow.main.temp);
    const feelsTemp = Math.round(dataNow.main.feels_like);
    const Sunrise = dataNow.sys.sunrise;
    const Sunset = dataNow.sys.sunset;
    const imgStatus = dataNow.weather[0].icon;
    const Status = dataNow.weather[0].main;
    const humidity = dataNow.main.humidity;
    const pressure = dataNow.main.pressure;
    const windSpeed = Math.round(dataNow.wind.speed);

    const templateWeatherTitle = `
        <h3 id="wrapperLocationCity">${location}</h3>`;
        wrapperLocationCity.innerHTML = templateWeatherTitle;

    const templateWeatherStatus = `
        <h1 id="statusTemperature">${temp}&deg;C</h1>`;
        statusTemperature.innerHTML = templateWeatherStatus;

        // Функция для преобразования Unix timestamp в читаемое время
    function convertUnixToTime(unixTimestamp) {
        const date = new Date(unixTimestamp * 1000); // Умножаем на 1000, чтобы преобразовать секунды в миллисекунды
        const hours = date.getHours().toString().padStart(2, '0'); // Получаем часы
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Получаем минуты
            return `${hours}:${minutes}`;
    }

    const sunriseTime = convertUnixToTime(Sunrise);
    const sunsetTime = convertUnixToTime(Sunset);

    const templateWeatherSunrise = `
        <p id="statusSunrise">${sunriseTime} AM</p>`;
    statusSunrise.innerHTML = templateWeatherSunrise;

    const templateWeatherSunset = `
        <p id="statusSunset">${sunsetTime} AM</p>`;
    statusSunset.innerHTML = templateWeatherSunset;

    const templateWeatherFeelsStatus = `
        <p id="statusFeelsTemperature">Feels like: <b>${feelsTemp}&deg;C</b></p>`;
        statusFeelsTemperature.innerHTML = templateWeatherFeelsStatus;
    

    //statusBlockImgStatus
    const iconStatus = function funcStatusBlockImgStatus(imgStatus) {
        let iconPath = '';
    
        if (imgStatus === '01d') {
            iconPath = 'icons/weather/icon-sun.png';
        } else if (imgStatus === '02d') {
            iconPath = 'icons/weather/icon-cloudy.png';
        } else if (imgStatus === '03d') {
            iconPath = 'icons/weather/icon-cloud.png';
        } else if (imgStatus === '04d') {
            iconPath = 'icons/weather/icon-cloud.png';
        } else if (imgStatus === '09d') {
            iconPath = 'icons/weather/icon-rainy.png';
        } else if (imgStatus === '10d') {
            iconPath = 'icons/weather/icon-rainy.png';
        } else if (imgStatus === '11d') {
            iconPath = 'icons/weather/icon-storm.png';
        } else if (imgStatus === '13d') {
            iconPath = 'icons/weather/icon-snowy.png';
        } else if (imgStatus === '01n') {
            iconPath = 'icons/weather/icon-night.png';
        } else if (imgStatus === '02n') {
            iconPath = 'icons/weather/icon-night-cloud.png';
        } else if (imgStatus === '03n') {
            iconPath = 'icons/weather/icon-cloud.png';
        } else if (imgStatus === '04n') {
            iconPath = 'icons/weather/icon-cloud.png';
        } else if (imgStatus === '09n') {
            iconPath = 'icons/weather/icon-rainy.png';
        } else if (imgStatus === '10n') {
            iconPath = 'icons/weather/icon-rainy.png';
        } else if (imgStatus === '11n') {
            iconPath = 'icons/weather/icon-storm.png';
        } else if (imgStatus === '13n') {
            iconPath = 'icons/weather/icon-snowy.png';
        } else {
            console.error('Icon not found!');
            return;
        }

        const statusBlockImgStatus = document.getElementById('statusBlockImgStatus');
        statusBlockImgStatus.src = iconPath;
        statusBlockImgStatus.alt = '';
    };
    iconStatus(imgStatus);

    const templateWeatherBlockStatus = `
        <div id="statusBlockStatus" class="status-block-status">${Status}</div>`;
        statusBlockStatus.innerHTML = templateWeatherBlockStatus;

    const templatestatusHumidity = `
        <div id="statusHumidity" class="status-block-info-status">${humidity}%</div>`;
        statusHumidity.innerHTML = templatestatusHumidity;

    const templatestatusPressure = `
        <div id="statusPressure" class="status-block-info-status">${pressure}hPa</div>`;
        statusPressure.innerHTML = templatestatusPressure;
        
    const templatestatusWindSpeed = `
        <div id="statusWindSpeed" class="status-block-info-status">${windSpeed}km/h</div>`;
        statusWindSpeed.innerHTML = templatestatusWindSpeed;

};

// Night
// 01n - clear (sun)
// 02n - moon clouds
// 03n - cloud
// 04n - clouds
// 09n - rain clouds
// 10n - rain, cloud and moon
// 11n - Thunderstorm (Гроза)
// 13n - snowly

// Day
// 01d - clear-day (sun)
// 02d - cloud and sun
// 03d - cloud
// 04d - clouds
// 09d - rain clouds
// 10d - rain, cloud and sun
// 11d - Thunderstorm (Гроза)
// 13d - snowly

//statusBlockStatus

if (arrayWearther) {
    loadWeather();
}