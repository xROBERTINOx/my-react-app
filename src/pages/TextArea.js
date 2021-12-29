import React,{useState} from 'react';
const TextArea = () => {
  var yus = window.localStorage.getItem("bal")
  if(yus >= 1) {
    return(
      <div>
        <h1>bal is larger than or equal to 1</h1>
      </div>
    );
  }else {  
    return (
      <div>
        <h1>bal is not larger than or equal to 1</h1>
      </div>
    );
  } 
};
  
  export default TextArea;
  