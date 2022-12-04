

// api key = a43072d3e5440f428a9bbf1f409a6760






document.querySelector("#sub").addEventListener("click", cityfun)

function cityfun() {
    var city = document.querySelector("#city1").value

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a43072d3e5440f428a9bbf1f409a6760`

    // console.log(city)

    fetch(url)
        .then(function (res) {
            return res.json()
        })
        .then(function (res) {
            // console.log(res.main.temp-273)
            appent(res)

        })
        .catch(function(err){
            console.log(err)
        })
}





    function liveloc(lat,lon)
    {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a43072d3e5440f428a9bbf1f409a6760`
    fetch(url)
    .then(function (res) {
        return res.json()
    })
    .then(function (res) {
        console.log(res)
        appent(res)

    })
    .catch(function(err){
        console.log(err)
    })
}










function appent(el)
{
    document.getElementById("cont").innerHTML=null;
let cont = document.getElementById("cont");

let map = document.getElementById("gmap_canvas")
// map.innerHTML=null

let city = document.createElement("p")
 city.innerText=   `City :  ${el.name}`;


 let min = document.createElement("p")
 min.innerText=    `Minium Temperature : ${Math.floor(el.main.temp_min-273)}`;


 let max = document.createElement("p")
 max.innerText=`Maxium Temperature  ${Math.floor(el.main.temp_max-273)}`;


 let current =  document.createElement("p")
 current.innerText= `Current Temperature :${Math.floor(el.main.temp-273)}`;

 let humidity = document.createElement("p")
 humidity.innerText=`Humidity : ${Math.floor(el.main.humidity)}`;

 let wind =document.createElement("p")
 wind.innerText=`Wind Speed: ${el.wind.speed}`

 let sunrise = document.createElement("p")
sunrise.innerText= `Sunrise :${el.sys.sunrise}`

 let sunset = document.createElement("p")
 sunset.innerText= `Sunset :${el.sys.sunset}`


cont.append(city,min,max,current,humidity,wind,sunrise,sunset)

map.src = `https://maps.google.com/maps?q=${el.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

}



document.querySelector("#location").addEventListener("click",locationfun)

function locationfun()
{

navigator.geolocation.getCurrentPosition(success);

function success(pos)
{
    

    var crd = pos.coords;

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);

  

  liveloc(crd.latitude,crd.longitude)

  
}

}