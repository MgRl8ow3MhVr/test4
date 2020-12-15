import { useState } from 'react';

const OneCompteur=(props) => {
    return (
    <div className='boite'>
        <span>{props.displayNum}</span>
        <div className='buttons'>

            { props.theSum<18 ?
                <button onClick={()=>{
                props.setNumFunction(props.displayNum+1)
                }}
                >+</button>:null
            }
         
          <button onClick={()=>{
            props.setNumFunction(props.displayNum-1)
          }}
          >-</button>
        </div>
    </div>
    )

}

export default OneCompteur
