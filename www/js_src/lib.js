

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function weather_fetcher(city, onSuccess) {
  fetch('/ReactJsIntro/getWeather.php?city=' + encodeURI(city))
    .then(handleErrors)
    .then((response) => response.json())
    .then(
      onSuccess
    )
    .catch((err) => {
      alert('error:' + err);
    });
}

function weather_fetcher_stub(city, onSuccess) {
  let data = [{
    "dt": 12345,
    "temp": "20",
    "time": "Thur 3pm",
    "description": "warm grey",
    "icon": "http://openweathermap.org/img/w/03d.png"
  }];
  onSuccess(data);
}


module.exports = {
  weather_fetcher: weather_fetcher,
  weather_fetcher_stub: weather_fetcher_stub,
};