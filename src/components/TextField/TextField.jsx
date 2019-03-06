import React from 'react'
import './style.css'
const TextField = (props) => {
    let input = null;
    const { value } = props;
    switch (value) {
        case 'Access':
            input = <input type="text" className="formControl" placeholder="Accessible" />;
            break;
        case 'Disabled':
            input = <input type="text" className="formControl" placeholder="Disabled Input" disabled="disabled" />;
            break;
        default:
            input = (
                <div className="error">
                    <input type="text" className="errorbox formControl" placeholder="ERROR" />
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
export default TextField;
