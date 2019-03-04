import React from 'react'
import './style.css'
const test = ()=>{


   return (
    <div>
        <h1>This is valid Input</h1>
        <input type="text" className="formControl" placeholder="Accessible" />
        <h1>This is Disabled Input</h1>
        <input type="text" className="formControl" placeholder="Disabled Input" disabled="disabled" />
        <h1>Input Box with errors</h1>
        {/* <input type="text" className="formControl" placeholder="" /> */}
        <input type="number" pattern="[0-9]*" inputmode="numeric"></input>
    </div>
       
   )
}
export default test;