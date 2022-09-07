var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38"

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)  .then(res => res.json()),{
method: 'POST',
header: {
    'content-type':'application/json'
},
body: JSON.stringify({
    name:'Tallahassee'
})
}
   .then(res => res.json())
   .then(data => console.log(data))

