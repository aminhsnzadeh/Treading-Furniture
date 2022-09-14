import React from "react";
import { Headbold } from "../text/heading";
import { Miscmd } from "../text/misc-text";
import { ButtonPri } from "../button/button";
import ChairImg from '../../img/chair.png'
import Aos from "aos";

 
function Meter(props) {
    return(
        <section className="meter">
            <Miscmd color='white' value={props.value} />
            <div className="outter-meter">
                <div className="inner-meter" style={{ width: props.percents }}>
                    <span>{props.percents}</span>
                </div>
            </div>
        </section>
    )
}


class Rate extends React.Component {
    constructor(probs) {
        super(probs)
 
        this.state = {
            head : {
                main : 'We Have Furniture Expertise In Following Areas.',
                year : '85 Years',
                miscYear : 'In furniture market'
            },
            rates : [
                 {
                    text : 'Designing',
                    percent : '79%'
                },
                 {
                    text : 'Elevation',
                    percent : '96%'
                },
                 {
                    text : 'Sketching',
                    percent : '87%'
                },
                 {
                    text : 'Strategy',
                    percent : '57%'
                }
            ]
        }
    }
    componentDidMount() {
        Aos.init()
    }
    render() {
        const renderRates = this.state.rates.map((content, index)=> <Meter key={index.toString()} value={this.state.rates[index].text} index = {this.state.rates.length} percents={this.state.rates[index].percent} />)
        return(
            <section id="rate">
                <section>
                    <div>
                        <Headbold color='white' value={this.state.head.main} />
                        <div className="meters">
                            {renderRates}
                        </div>
                        <ButtonPri value='Learn More' href="#" />
                    </div>
                    <div>
                        <div>
                            <Headbold color='white' value={this.state.head.year} />
                            <Miscmd color='white' value={this.state.head.miscYear} />
                        </div>
                        <figure>
                            <img src={ChairImg} alt='chair png' />
                        </figure>
                    </div>
                </section>
            </section>
        )
    }
}

export default Rate