var APIkey = "107688309c999aee861d93bec1b1100a";
var city;
var lon;
var lat;
var today = dayjs();
const storageInput = document.querySelector("input"),
    h2 = document.querySelector("h2");

// search.addEventListener("keyup", display);
// localStorage.setItem('keyName', input.value)
// localStorage.getItem('keyName')


$( "#btnSearch" ).click(function() {
    city = $("#search").val();
    var weatherCityAPI = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIkey 

 function display() {
    localStorage.setItem('value', input.value);
    h2.innerHTML = localStorage.getItem("value");
 }

    // btnSearch.addEventListener('click', saveToLocalStorage);

    $.getJSON(weatherCityAPI, function(json){
        console.log(json.coord.lat);
        lat = json.coord.lat;
        console.log(json.coord.lon);
        lon = json.coord.lon;
        var weatherLonLatAPI = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + APIkey 
    
        $.getJSON(weatherLonLatAPI, function(data){
            $("#cityName").text(data.city.name );
            $('#currentDay').text(today.format('MM/DD/YYYY'));

            $('#temp1').text(json.main.temp);
            $('#wind1').text(json.wind.speed);
            $('#humidity1').text(json.main.humidity);

            var mydate = dayjs().add(1,'day');

            $('#date2').text(mydate.format('MM/DD/YYYY') );
            $('#temp2').text(data.list[0].main.temp);
            $('#wind2').text(data.list[0].wind.speed);
            $('#humidity2').text(data.list[0].main.humidity);

         
            mydate = dayjs().add(2,'day');
            $('#date3').text(mydate.format('MM/DD/YYYY') );
            $('#temp3').text(data.list[1].main.temp);
            $('#wind3').text(data.list[1].wind.speed);
            $('#humidity3').text(data.list[1].main.humidity);

            mydate = dayjs().add(3,'day');
            $('#date4').text(mydate.format('MM/DD/YYYY') );
            $('#temp4').text(data.list[2].main.temp);
            $('#wind4').text(data.list[2].wind.speed);
            $('#humidity4').text(data.list[2].main.humidity);

            mydate = dayjs().add(4,'day');
            $('#date5').text(mydate.format('MM/DD/YYYY') );
            $('#temp5').text(data.list[3].main.temp);
            $('#wind5').text(data.list[3].wind.speed);
            $('#humidity5').text(data.list[3].main.humidity);

            mydate = dayjs().add(5,'day');
            $('#date6').text(mydate.format('MM/DD/YYYY') );
            $('#temp6').text(data.list[4].main.temp);
            $('#wind6').text(data.list[4].wind.speed);
            $('#humidity6').text(data.list[4].main.humidity);
            console.log(data.list);
        });
    });
  
});


