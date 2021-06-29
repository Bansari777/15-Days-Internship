//program to display time every 3 seconds
function showTime(){
    //return new date and time
    let dateTime = new Date();
    //returns the current local time(time)
    let time= dateTime.toLocaleTimeString();
    console.log(time)
    //display the time after 3 seconds
    setTimeout(showTime, 3000);
}
//calling the function
showTime();
// use ctrl_c  to stop execution