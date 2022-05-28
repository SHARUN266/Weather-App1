// var Api_Key="daa6c54a51e6cf0f3157e8cd84312f4a"


// // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// ///we are catching our html tags
// var timeEL=document.querySelector("#time")
// var dateEl=document.querySelector("#date")
// var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// var timezone=document.querySelector("#timezone")
// var desh=document.querySelector("#country")
// var currentTempEl =document.querySelector("#currenttemp")
// var futureday=document.querySelector(".day")

// var weatherForecastEl=document.querySelector("#weather-forecast")

// var day1=document.querySelector('.day')
// var day2=document.querySelector('#day2')
// var day3=document.querySelector('#day3')
// var day4=document.querySelector('#day4')
// var day5=document.querySelector('#day5')
// var day6=document.querySelector('#day6')
// var day7=document.querySelector('#day7')

// /// html tags end here
// //Now We Are Get Real Time In Our Application
// setInterval(()=>{
//     var time=new Date();
//     var month=time.getMonth();
//     var date=time.getDate();
//     var day=time.getDay();
//     var hour=time.getHours();
//     var hourFormat=hour >=13 ?hour %12:hour;
//     var minutes = time.getMinutes();
//     var ampm = hour >=12 ? 'PM' : 'AM'

//     timeEL.innerHTML=(hourFormat<10?'0'+ hourFormat: hourFormat)+':'+(minutes<10?'0'+minutes: minutes)+' '+`<span id="am-pm">${ampm}</span>`
//     dateEl.innerHTML=days[day]+','+date+' '+ months[month]

    
//     day1.innerHTML=days[day+1]

// },1000)

// //On Search Find weather
// async function myfunction(){
//     event.preventDefault()
//     let city=document.querySelector(".Search").value;
//     let url1=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`;
//     timezone.innerHTML='Asia/'+city
// console.log(city)
//     let res=await fetch(url1)
//     console.log(res)
//     let data1=await res.json();
//     append(data1)


   
// }
// function append1(data1){
//     //console.log(data)
//     document.getElementById("current-weather-items").innerHTML=""
  
//         let h3=document.createElement("h3")
//         h3.innerText=data1.name;
//         h3.style.color="red"
        

//         let p=document.createElement('p')
//         p.innerText=`Current Temp. ${Math.ceil((data1.main.temp)/10)}`;

//         let p1=document.createElement('p')
//         p1.innerText=`Min Temp   ${Math.ceil((data1.main.temp_min)/10)}`;
//         let p2=document.createElement('p')
//         p2.innerText=`Max Temp.  ${Math.ceil((data1.main.temp_max)/10)}`;
//         let p3=document.createElement("p")
//         p3.innerText= 'Humidity:-'+data1.main.humidity

//         var box=document.createElement('div')

//         box.append(h3,p,p1,p2,p3)

//         document.getElementById("box2").append(box)


//         let iframe=document.getElementById("gmap_canvas")
//         iframe.src=`https://maps.google.com/maps?q=${data1.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
   
// }





// ///End On Search









// // Here we know weather based on location


// async function getdata(lon,lat){
//     //let city=document.getElementById("Search").value

//     //let url1=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`
//     let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_Key}`;
    

//     console.log(url)
    

//     //Now we start fetch
    

//    let res=await fetch(url)
//    console.log(res)
//    let data=await res.json();
//    append(data)
  

//    //console.log(data)
// }


// function append(data){
//     //console.log(data)
//     document.getElementById("current-weather-items").innerHTML=""
  
//         let h3=document.createElement("h3")
//         h3.innerText=data.name;
//         h3.style.color="red"
//         timezone.innerHTML='Asia/'+data.name
        

//         let p=document.createElement('p')
//         p.innerText=`Current Temp. ${Math.ceil((data.main.temp)/10)}C`;

//         let p1=document.createElement('p')
//         p1.innerText=`Min Temp   ${Math.ceil((data.main.temp_min)/10)}C`;
//         let p2=document.createElement('p')
//         p2.innerText=`Max Temp.  ${Math.ceil((data.main.temp_max)/10)}C`;
//         let p3=document.createElement("p")
//         p3.innerText= 'Humidity:-'+data.main.humidity+'%'
//         let sunrise=document.createElement("p")
//         //sunrise.innerHTML= 'Sunrise :-'+ (Math.floor((data.sys.sunrise/1000)%60) +'Minutes'+'='+Math.floor((data.sys.sunrise/(1000*60))%60)+'hours'+'='+Math.floor((data.sys.sunrise/(1000*60*60))%24))
//         sunrise.innerHTML='Sunrise:-'+(Math.floor((data.sys.sunrise/(1000*60*60))%24+2)+':'+Math.floor((data.sys.sunrise/(1000*60))%60+4)+'  AM')
//         let sunset=document.createElement("p")
//         sunset.innerHTML= 'Sunset:-'+(Math.floor((data.sys.sunset/(1000*60*60))%24+4)+':'+Math.floor((data.sys.sunset/(1000*60))%60+21)+'  PM')
//         var box=  document.createElement('div')

//         box.append(h3,p,p1,p2,p3,sunrise,sunset)

//         document.getElementById("current-weather-items").append(box)


//         let iframe=document.getElementById("gmap_canvas")
//         iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


//         ///here we planing future days weather forcasting

//         let otherDayForcast = ''
//         data.daily.forEach((day, idx) => {
//             if(idx == 0){
//                 currentTempEl.innerHTML = `
//                 <img src="http://openweathermap.org/img/wn//${day.weather[0].icon}@4x.png" alt="weather icon" class="w-icon">
//                 <div class="other">
//                     <div class="day">${window.moment(day.dt*1000).format('dddd')}</div>
//                     <div class="temp">Night - ${day.temp.night}&#176;C</div>
//                     <div class="temp">Day - ${day.temp.day}&#176;C</div>
//                 </div>
                
//                 `
//             }else{
//                 otherDayForcast += `
//                 <div class="weather-forecast-item">
//                     <div class="day">${(day.dt*1000).format('ddd')}</div>
//                     <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" alt="weather icon" class="w-icon">
//                     <div class="temp">Night - ${day.temp.night}&#176;C</div>
//                     <div class="temp">Day - ${day.temp.day}&#176;C</div>
//                 </div>
                
//                 `
//             }
//         })
    
    
//         weatherForecastEl.innerHTML = otherDayForcast;
       






   
// }


// function getLocationWeather() {
//     navigator.geolocation.getCurrentPosition(success);
//     function success(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       getdata(longitude,latitude );
//       console.log(latitude);
//       console.log(longitude);
//       desh.innerHTML=Math.ceil(latitude)+'&#176N ,'+Math.ceil(longitude)+'&#176E'
//     }
//   }

//   getLocationWeather()
  


  