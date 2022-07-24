

const alarm_form = document.getElementById('alarm-form');
const alarm = document.getElementById('alarm');
const stop_alarm = document.getElementById('stop_alarm');
const alarm_time = document.querySelector('.alarm-time'); 

let clear;
// get form data
alarm_form.onsubmit = (e) => {
    // relode of our form
    e.preventDefault()

    clearInterval(clear);
    const form_data = new FormData(e.target);
    const {date, time} = Object.fromEntries(form_data.entries());

    if (!date && !time) {
        alert('Set Your Data And Time');
    };

    
    
 clear = setInterval( () => {

        alarm_function( date, time, alarm_time, alarm, clear );

   }, 1000) ;
}


// stop_alarm 
stop_alarm.onclick = () => {
    alarm.pause();
}
