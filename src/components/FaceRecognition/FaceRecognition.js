import React from "react";


const FaceRecognition = ({imgUrl}) => {
  return (
    <div className='center ma'>
    <div className='absolute mt2'>
    <img alt='' src={imgUrl}></img>
    </div>
    
    </div>
   
  );
};
export default FaceRecognition;
