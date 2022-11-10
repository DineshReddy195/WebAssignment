var form = document.querySelector(".form");
var windspeed = document.querySelector(".windspeed");
windspeed.style.color="Green";
windspeed.style.fontSize="30px";
var temp = document.querySelector(".temp");
temp.style.color="Green";
temp.style.fontSize="30px";
var desc = document.querySelector(".desc");
desc.style.color="Green";
desc.style.fontSize="30px";
var apiKey = "0bf5666b0408ca8468f64cd098b820d6";
var h2Ref=document.querySelector(".name");

function fn (e){
e.preventDefault();
var input=document.getElementById('search').value;
if(input===""){
    h2Ref.innerText="Please Enter City Name";
}else{
    h2Ref.innerHTML=`Weather of ${input}`;
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`).then((response)=>response.json()).then((data)=>{
    console.log(data);
 var tempVal=data.main.temp;
 var descVal=data.weather[0].description;
 var speedVal=data.wind.speed;
 temp.innerHTML= 'Temperature:' + ' ' + tempVal;
 desc.innerHTML = 'Sky Conditions:' + ' ' + descVal;
 windspeed.innerHTML ='Wind Speed:'+ ' ' + speedVal;

})
   
}
form.addEventListener('submit',fn);