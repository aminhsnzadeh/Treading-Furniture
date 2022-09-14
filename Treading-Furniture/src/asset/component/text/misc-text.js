import React from 'react';
import '../../css/style.css'

function Miscsm(props) {
    return (
        <h5 data-color={props.color} className='misc-sm'>{props.value}</h5>
    )
}
function Miscmd(props) {
    return (
        <h5 data-color={props.color} className='misc-md'>{props.value}</h5>
    )
}
function Miscnum(props) {
    return (
        <h5 data-color={props.color} className='misc-num'>{props.value}</h5>
    )
}
function Navitem(props) {
    return(
        <li className='nav-item'><a href={props.href}>{props.value}</a></li>
    )
}
function Caption(props) {
    return(
        <h3 className='caption'>{props.value}</h3>
    )
}
function Logo(props) {
    return(
        <span className={props.class}></span>
    )
}

export {
    Miscsm,
    Miscmd,
    Miscnum,
    Navitem,
    Caption,
    Logo
}
