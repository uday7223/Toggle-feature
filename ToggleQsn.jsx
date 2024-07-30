import React, { useState} from 'react'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

//THIS ACTS LIKES A CHILD COMPONENT WHICH RECIEVES THE DATA IN PROPS
const ToggleQsn = (props) => {
    let{id,question,answer}=props //prop returns an Object not a Array

let [bool,setbool]=useState(true);

let handleClick=()=>{
    setbool(!bool)
}


  return (

    <button onClick={handleClick}>
       <div className="questoin">
       {question} 
       </div>
       <div>{bool ? <ArrowCircleDownIcon/> : <ArrowCircleUpIcon/>}</div>
        {bool ? "":<p>{answer}</p>}
        </button>
)
}

export default ToggleQsn