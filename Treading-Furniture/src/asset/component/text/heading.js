import React from 'react';
import '../../css/style.css'

function Headmain(props) {
    return (
        <h1>{props.value}</h1>
    )
}
function Headsm(props) {
    return (
        <h3 className='head-sm' data-color={props.color}>{props.value}</h3>
    )
}
function Headmd(props) {
    return (
        <h2 className='head-md' data-color={props.color}>{props.value}</h2>
    )
}
function Headbold(props) {
    return (
        <h2 className='head-bold' data-color={props.color}>{props.value}</h2>
    )
}

export {
    Headbold,
    Headsm,
    Headmd,
    Headmain
}
