import React from "react";
function Operations(props){
    const {onclickVerifiedFunction}=props
    function verified(){
      onclickVerifiedFunction()
    }
    return(
        <>
          <div>Result:{props.result}</div>
          <button onClick={verified}>huuu</button>
        </>
    )

}
export default Operations;

