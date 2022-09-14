import React from "react";
import {Headbold, Headsm} from '../text/heading'
import { Parasm } from "../text/paragraph";
import { Miscmd } from "../text/misc-text";
import Gal1 from '../../img/work1.jpg'
import Gal2 from '../../img/work2.jpg'
import Gal3 from '../../img/work3.jpg'
import Gal4 from '../../img/work4.jpg'

function GalChild(props) {
    return(
        <figure className="gal-child">
            <img src={props.src} alt={props.alt} />
            <figcaption>
                <Headsm value={props.valueH} color='white' />
                <Parasm value={props.valueP} color='white' />
            </figcaption>
        </figure>
    )
}

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            content : [
                {
                    src : Gal1,
                    alt : 'furniture design',
                    caption : {
                        heading : 'Comfortable chair',
                        paras : 'Living room cateagory'
                    }
                },
                {
                    src : Gal2,
                    alt : 'furniture design',
                    caption : {
                        heading : 'Elegant Chair',
                        paras : 'Style chair'
                    }
                },
                {
                    src : Gal3,
                    alt : 'furniture design',
                    caption : {
                        heading : 'Comfortable Lounge chair',
                        paras : 'For kids to sleep'
                    }
                },
                {
                    src : Gal4,
                    alt : 'furniture design',
                    caption : {
                        heading : 'Imported Fancy Chair',
                        paras : 'For everything'
                    }
                }
            ],
            head : 'Awesome Furniture Design',
            para : 'Best of our work here.'
        }
    }
    render() {
        const galleryImg = this.state.content.map((content, index) => <GalChild key={index.toString()} src={this.state.content[index].src} alt={this.state.content[index].alt} valueH={this.state.content[index].caption.heading} valueP={this.state.content[index].caption.paras}  />)
        return(
            <section id="gallery">
                <section>
                    <div className="grid">
                        <div>
                            <Headbold value={this.state.head} />
                            <Miscmd value={this.state.para} />
                        </div>
                        {galleryImg}
                    </div>
                </section>
            </section>
        )
    }
}

export default Gallery