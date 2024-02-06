import "./style.css"
import { useEffect } from "react";
import { useState } from "react";


export function Timer ({initialState, title}){

    const [count,setCount] = useState(initialState)

    const resetTimer = () => {
        setCount(initialState)
    }

    useEffect(() => {

        const interval = setInterval(() =>{
            setCount((count) => count > 0 ? count - 1 : 0)
        }, 1000)

        return () => clearInterval(interval)
    },[])



    return(
<>
        <div className="container">
                <h3 className="text">

                {title} Timer: {Math.floor(count / 60).toString().padStart(2, '0')}:{(count % 60).toString().padStart(2, '0')} 

            </h3>
            <div className="circle">

        </div>

           {  count <= 0 && < button className="btn" onClick={resetTimer}> Resend </button>}
     </div>
           
           
    </>
    )


}