import React from "react";
import {Headbold} from '../text/heading'
import {Parasm} from '../text/paragraph'
import {ButtonPri} from '../button/button'
import HeadImage from '../../img/header-image1.png'
import Lamp from '../../img/lamb.png'
import Aos from "aos";


class Heading extends React.Component {
    constructor(probs) {
        super(probs)
        this.state = {
            content : {
                head : 'Treading Furniture',
                para : 'Beautiful , Smooth & Elegant',
                btn : 'Learn More',
                btnLink : '#'
            }
        }
    }
    componentDidMount() {
        Aos.init()
    }
    render() {
        return(
            <section id="head">
                <section>
                    <div>
                        <article>
                            <Headbold value={this.state.content.head} color='white' />
                            <Parasm value={this.state.content.para} color = 'white' />
                            <ButtonPri value={this.state.content.btn} href={this.state.content.btnLink} />
                        </article>
                        <figure><img src={HeadImage} alt="Modern sofa png"></img></figure>
                        <figure  id="absolute-lamp"><img src={Lamp} alt="lamp png"></img></figure>
                    </div>
                </section>
            </section>
        )
    }
}

export default Heading 