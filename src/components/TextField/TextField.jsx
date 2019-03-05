// import React from 'react'
// import './style.css'
// const test = ()=>{

//    return (
//     <div>
//         <h1>This is valid Input</h1>
//         <input type="text" className="formControl" placeholder="Accessible" />
//         <h1>This is Disabled Input</h1>
//         <input type="text" className="formControl" placeholder="Disabled Input" disabled="disabled" />
//         <h1>Input Box with errors</h1>
//         <div className="error">
//             <input type="text" className="errorbox formControl" placeholder="" /><br />
//             Contains Error
//         </div>
        
//     </div>
       
//    )
// }
// export default test;
import React from 'react'
import './style.css'
const test = (props)=>{
    let input = null;
    const { value } = props;
    switch( value ){
        case 'Access':
            input = <input type="text" className="formControl" placeholder="Accessible" />;
        break;
        case 'Disabled':
            input = <input type="text" className="formControl" placeholder="Disabled Input" disabled="disabled" />;
        break;
        default:
            input = (
                <div className="error">
                    <input type="text" className="errorbox" placeholder="" />
                    <p>Error field</p>
                </div>
            )
    };
   return (
<div>
    {input}
</div>      
   )
}
export default test;