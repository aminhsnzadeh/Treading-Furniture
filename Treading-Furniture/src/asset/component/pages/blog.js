import React from "react";
import chairImg from "../../img/resting-chair.png"
import { Headbold } from "../text/heading";
import { Paramd } from "../text/paragraph";
import { ButtonPri } from "../button/button";

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content : {
                head1 : 'From Our Blog',
                head2 : 'Craftsmanship Is An Art',
                para : 'Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry. Lorem ipsum is simply dummy text of the printing and typesetting. Lorem Ipsum has been the industry.',
                btn : 'Learn More',
                link : 'http://aminhsnzadeh.ir',
                src : chairImg
            }
        }
    }
    render() {
        return(
            <section id="blog">
                <section>
                    <article>
                        <Headbold color='white' value={this.state.content.head1} />
                        <Headbold color='white' value={this.state.content.head2} />
                        <Paramd color='white' value={this.state.content.para} />
                        <ButtonPri href={this.state.content.link} value={this.state.content.btn} />
                    </article>
                    <figure>
                        <img src={this.state.content.src} alt='resting bell like chair' />
                    </figure>
                </section>
            </section>
        )
    }
}

export default Blog