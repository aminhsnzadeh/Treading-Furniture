import React from "react";
import { Miscnum, Caption } from "../text/misc-text";
import { Paramd, Parasm } from "../text/paragraph";
import { Headsm } from "../text/heading";

function Card1(props) {
    return(
        <div className="about-card">
            <Miscnum value={props.number} />
            <Headsm value={props.heading} />
            <Paramd value={props.value} />
        </div>
    )
}
function Custom(props) {
    return(
        <article className="customer-card">
            <span className="bi-quote"></span>
            <Paramd value={props.value} color='white' />
            <figure>
                <img src={props.src} alt={props.alt} />
                <figcaption><Caption value={props.cap} /></figcaption>
            </figure>
        </article>
    )
}
function SlideCard(props) {
    return(
        <div className="slider-card">
            <figure>
                <img src={props.src} alt={props.alt} />
            </figure>
            <article>
                <Headsm value={props.head} />
                <Parasm value={props.para} />
            </article>
        </div>
    )
}

export {
    Card1,
    Custom,
    SlideCard
}