function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
//var makes variables for hours,minutes and seconds from 0-23 and 0-59

    if(h == 0){
        h = 12;
        //if h = 0 its AM
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }//if h is bigger than 12 its PM

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    //this is a update funktion for the time. updates in  a constant

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
//variable for time. contains hour minute and getSeconds
//document is a identification for HTML
    setTimeout(showTime, 1000);
//its a delay on 1 sec, basically that a refreshrate every second.
}

showTime();
