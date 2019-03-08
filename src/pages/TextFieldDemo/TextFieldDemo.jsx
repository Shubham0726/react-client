import React from 'react'
import Textfield from '../../components/TextField/TextField'


const TextField = () => {
    return (
        <div>
            This is Accessible Text Input
            <Textfield value='' type="text" />
            This is Disabled Text Input
            <Textfield value='Disabled' />
            Text Input with Error
            <Textfield value='error' error="Error" />
        </div>
    )
}
export default TextField;
