import React from "react";
import { useRef,useEffect } from "react";

const Use_ref = () => {


  //It will return the object with only single property current
  //count.current --> You can mannually change this whenever you want and it will return the same object when it triggers but it does not trigger the re-render of the component
  const count = useRef(0);

 const print_count = setInterval(() => {
    console.log('count is ', count.current);
 }, 1000);
  



 const handleClick = () => {
    
    count.current = count.current + 1;
            alert(`You have Clicked the button ${count.current} times buddy`);

 }

 useEffect(() => {


 }, [handleClick])
 


  

  //We are using the useRef for the having reference of count that how many times user is clicking on the button we are not displaying it but we are having only count reference that how many times user has clicked that button
  
  //useRef --> It does not trigger a re-render of the component that's why we dont use it when we want to display the change we use useState hook instead whenver we want to display something 
  return (
    <>
      <div>
        {count.current}
            <button
          onClick={() => {
            handleClick()
            // count.current = count.current + 1;
            // alert(`You have Clicked the button ${count.current} times buddy`);
          }}
        >
          Click me
        </button>
      </div>
    </>
  );
};

export default Use_ref;
