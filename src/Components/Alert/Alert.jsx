import React, { useEffect } from 'react'
import './Alert.css'
import { ReactComponent as AlertTriangle } from '../../Assests/icons/alert-triangle.svg';
import { ReactComponent as CheckCircle } from '../../Assests/icons/check-circle.svg';
export default function Alert({error,message}) {
  useEffect(() => {
    scrollToTargetAdjusted('Form-alert')
  
    return () => {
      
    }
  }, [])
  
  return (
    <div id='Form-alert' className={`formError ${error?'shake-horizontal1':'shake-horizontal2'}`}>{error?<AlertTriangle color={'red'}/>:<CheckCircle color={'green'}/>}<p>{message}</p></div>
  )
}
function scrollToTargetAdjusted(id){
  var element = document.getElementById(id);
  var headerOffset = 100;
  var elementPosition = element.getBoundingClientRect().top;
  var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  window.scrollTo({
       top: offsetPosition,
       behavior: "smooth" 
  });
}