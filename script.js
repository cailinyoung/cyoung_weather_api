// input city name to api 
var city = "Salt Lake City"
var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=925faca1c8c28b6a97a0c737597b53e4"
// getting data
fetch(url)
    // Got the data in JSON
    .then(response => response.json())
    .then(data =>
        //How do we use and understand JSON
        console.log(data)
        //Redisplay data to html
        //temp = data.main.temp
    );
// get results 


// display results 
