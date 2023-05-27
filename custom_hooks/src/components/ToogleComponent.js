import { useState } from "react";
import useToogle from "../Hooks/useToogle";



export default function ToogleComponent() {

    const[value,toogleValue] = useToogle(false)

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toogleValue}>Toogle</button>
            <button onClick={()=>toogleValue(true)}>Make True</button>
            <button onClick={()=>toogleValue(false)}>Make False</button>

        </div>
    )


}