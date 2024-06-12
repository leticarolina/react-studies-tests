import { forwardRef } from "react";

//this needs a second parameter as ref so you set the ref props to the ref you want to be equal to, in this case just the input
//is there are other parameters, ref still need to be the second prop and can destrcut the first ({title,name} , ref)
function InnerInput(props, ref) {
  return (
    <input {...props} ref={ref} style={{ border: "2px solid green" }}></input>
  );
}

//need to wrap entire component inside fowardRef

export const CustomFowardRefComponent = forwardRef(InnerInput);
