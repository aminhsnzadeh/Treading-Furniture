import React from "react";
import { Card1 } from "../card/card";
import { Miscsm } from "../text/misc-text";
import { Headmain } from "../text/heading";
import { Paramd } from "../text/paragraph";

class About extends React.Component {
    constructor(probs) {
        super(probs)
        this.state = {
            head : {
                h1Text : 'Treading Furniture - A Creative Furniture Company Located In NewYork, USA.',
                card1 : 'Living Room',
                card2 : 'Outdoor Furniture',
                card3 : 'Dinning Areas',
                misc : 'Established since 1930.'
            },
            content : {
                mainText1 : 'Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin. Quisque vitae sodales lectus. Nam porttitor justo sed mi finibus.',
                mainText2 : 'Curabitur mollis bibendum luctus. Duis suscipit vitae dui sed suscipit. Vestibulum auctor nunc vitae diam eleifend, in maximus metus sollicitudin.',
                card1Content : 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
                card2Content : 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.',
                card3Content : 'Lorem ipsum dolor amet, consectetur adipiscing elit augue diam, accumsan ipsum dolor sit amet, consectetur adipiscing.'
            }
        }
    }
    render() {
        return(
            <section id="about">
                <section>
                    <div className="top-content">
                        <article>
                            <div>
                                <Miscsm value={this.state.head.misc} />
                                <Headmain value={this.state.head.h1Text} />
                            </div>
                            <div>
                                <Paramd value={this.state.content.mainText1} />
                                <Paramd value={this.state.content.mainText2} />
                            </div>
                        </article>
                        <div>
                            <Card1 heading={this.state.head.card1} value={this.state.content.card1Content} number={'01'} />
                            <Card1 heading={this.state.head.card2} value={this.state.content.card2Content} number={'02'} />
                            <Card1 heading={this.state.head.card3} value={this.state.content.card3Content} number={'03'} />
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

export default About