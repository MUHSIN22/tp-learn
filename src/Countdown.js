import React, { useEffect, useState } from 'react'

export default function Countdown({minutes=0,seconds=0,trigger=()=>{}}) {
    const [timer,setTimer] = useState('')
    useEffect(() => {
        let countDownDate = new Date().getTime()+ (minutes*60+seconds)*1000;

        // Update the count down every 1 second
      
        var x = setInterval(function () {
    
            // Get today's date and time
            let now = new Date().getTime();
    
            // Find the distance between now and the count down date
            let distance = countDownDate - now;
    
    
            // Time calculations for days, hours, minutes and seconds]
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
            // Display the result in the element with id="demo"
           let countdown = addZero( minutes) + ":" + addZero(seconds);

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                countdown = "EXPIRED";
                trigger()
            }
            
            setTimer(countdown)
        }, 1000);
    
      return () => {

         clearInterval(x)
         
      }
    }, [])
    
  return (
    <>{timer}</>
  )
}
function addZero(num){
  if(String(num).length<2){ 
    return '0'+String(num)
  }else{
    return String(num)
  }
}