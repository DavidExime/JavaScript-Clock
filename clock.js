function hexClock(){
				var date = new Date();
				var h = date.getHours(); 
				var m = date.getMinutes(); 
				var s = date.getSeconds(); 
				var session = "AM";
				
				if(h >= 12){
					h = h - 12;
					session = "PM";
				}

				if(h == 0){
					h = 12;
				}

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				var time = h + ":" + m + ":" + s + " " + session;
				document.getElementById("MyClockDisplay").innerText = time;
				document.getElementById("MyClockDisplay").textContent = time;

				setTimeout(showTime, 1000);
			}

var clock = document.getElementById('clock');
var hexColor = document.getElementById('hex-color');

function hexClock() {
	var time = new Date();
	var hours = (time.getHours() % 12).toString();
	var minutes = time.getMinutes().toString();
	var seconds = time.getSeconds().toString();

	if (hours.length < 2) {
		hours = '0' + hours;
	}

	if (minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if (seconds.length < 2) {
		seconds = '0' + seconds;
	}

	var clockStr = hours + ' : ' + minutes + ' : ' + seconds;
	var hexColorStr = '#' + hours + minutes + seconds;

	clock.textContent = clockStr;
	hexColor.textContent = hexColorStr;
	document.body.style.backgroundColor = hexColorStr;
}

hexClock();
setInterval(hexClock, 1000);











// function change_random_bgcolor(change_time) {
//       setInterval(function change_color() {
//         $("body").animate({
//         backgroundColor: getRandomColor()
//     }, 500);
// }, change_time);
// }
// change_random_bgcolor(1000);
// });




























// function clock(){
// 	var _time = new Date();//	Gets the current date and time

// 	//console.log(_time);//	Debugging
// 	var hour = _time.getHours();//	gets the current hour
// 	var minute = _time.getMinutes();//	gets the current minute
// 	var second = _time.getSeconds();//	gets the current second

// 	console.log(convert(hour) + ":" + convert(minute) + ":" + convert(second));

// }

// setInterval(clock, 1000);//	function and time in milliseconds

// function convert(t){	// This function is to add "0" if the time is less than 10
// 	if(t < 10){//	Checks if the number is a single digit
// 		t = "0" + t;//	Concats "0" and the hour/minute/second
// 	}
// 	return t;
// }



// function clock(){
//   var _time = new Date()
//   var hour = _time.getHours()
//   var minute = _time.getMinutes()
//   var second = _time.getSeconds()
//   var bgc = "#"+h+m+s

//   if(h<=9){
//       h = '0' +h;
//   }
 
//   if (m<=9) {
//       m = '0' +m;
//   }
 
//   if(s<= 9){
//       s = '0'+s
//   }

//   if (h>12){
//       h = h -12
//   }

//   document.getElementById('hours').innerHTML = h + ': '
//   document.getElementById('min').innerHTML = m + ':  '
//   document.getElementById('sec').innerHTML = s
//   document.body.style.background = bgc

//   setTimeout(showTime, 1000)

// }

// showTime();







