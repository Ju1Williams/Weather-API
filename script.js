fetch('https://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json'),{
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
   