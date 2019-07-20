import React from 'react';

const TopEvents=()=>{
  const HandleFooter=(value,e)=>{
    e.preventDefault();
    alert(value);
  };

  return(
    <a href="/" onClick={e=>HandleFooter("Back To Home",e)}>
      Back To Home
    </a>
  );
}

export default TopEvents;
