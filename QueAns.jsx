import React, { useState } from 'react'
import "./mcqData"
import { mcqData } from './mcqData'
import "./queAns.css"
import ToggleQsn from './ToggleQsn'

//THIS ACTS LIKES A PARENT COMPONENT WHICH SENDS THE DATA IN PROPS

const QueAns = () => {
    
    // let[bool,setboll] = useState(true)
    // let handleClick=()=>{
    //     setboll(!bool)
    // }
  return (
    <>
        <div className="mcq-con">
            <div className="header">MCQs</div>
            <div>
                {
                    mcqData.map((elem)=>{
                        let {id,que,ans} = elem;


                        return(
                            <>
                            {/* <button onClick={handleClick}>{elem.que}
                            {bool ? "":<p>{ans}</p>}
                            </button> */}

                            <ToggleQsn id={id} question={que} answer={ans} />
                            </>
                        )
                    })
                }
            </div>
        </div>
    
    </>
)
}

export default QueAns