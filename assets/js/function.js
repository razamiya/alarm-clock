

const alarm_function = (date, time, alarm_time, alarm, clear ) => {

  

     // Get Total Time
     const start_time = new Date();
     const end_time = new Date(date + ' ' + time);
     const total_time = Math.floor(Math.abs(end_time.getTime() - start_time.getTime()))


     const total_sec = Math.floor(total_time / 1000);
     const total_minit = Math.floor(total_sec / 60 );
     const total_hour = Math.floor(total_minit / 60 );
     const total_day = Math.floor(total_hour / 24 );

     // get single Time stamp

     const hour = total_hour - (total_day * 24);
     const min = total_minit - (total_day * 24 * 60 ) - ( hour * 60 );
     const sec = total_sec - ( total_day * 24 * 60 * 60 ) - (hour * 60 * 60 ) - (min * 60);

     if( total_sec == 0 ) {
        clearInterval(clear);
        alarm.play();
     };;


     alarm_time.innerHTML =  `<h1>${total_day} D : ${hour} H : ${min} M : ${sec} S </h1>`
};