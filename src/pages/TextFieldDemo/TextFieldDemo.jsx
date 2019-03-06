import React from 'react'
import Textfield from '../../components/TextField/TextField'
import Slider from '../../components/Slider/Slider'


const TextField = () => {
    return (
        <div>
            <Slider />
            <Textfield value='Access' />
            <Textfield value='Disabled' />
            <Textfield value='' />
        </div>
    )
}
export default TextField;
