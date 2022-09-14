import React from 'react';
import '../../css/style.css'

function Parasm(props) {
    return (
        <p className='para-sm' data-color={props.color}>{props.value}</p>
    )
}
function Paramd(props) {
    return (
        <p className='para-md' data-color={props.color}>{props.value}</p>
    )
}

export {
    Parasm,
    Paramd
}
