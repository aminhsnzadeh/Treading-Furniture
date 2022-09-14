import React from "react";
import '../../css/style.css'

function ButtonPri(props) {
    return(
        <button className="btn-primary"><a href={props.href}>{props.value}</a></button>
    )
}
function ButtonSec(props) {
    return(
        <button className="btn-secondary"><a href={props.href}>{props.value}</a></button>
    )
}
function ButtonBlue(props) {
    return(
        <button className="btn-ternary">{props.value}</button>
    )
}

export {
    ButtonPri,
    ButtonSec,
    ButtonBlue
}