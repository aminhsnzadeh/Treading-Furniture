import React from "react";
import ReactDOM from "react-dom";
import { Miscsm } from "../text/misc-text";
import { Headbold } from "../text/heading";
import slideImg1 from "../../img/item1.png"
import slideImg2 from "../../img/item2.png"
import slideImg3 from "../../img/item3.png"
import slideImg4 from "../../img/item4.png"
import slideImg5 from "../../img/item5.png"
import slideImg6 from "../../img/table.png"
import { SlideCard } from "../card/card";

const slideLength = 5
let turn = 0

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.toLeft = this.toLeft.bind(this)
        this.toRight = this.toRight.bind(this)
        this.slider = React.createRef()
        this.state = {
            heading : {
                misc : 'Comprehenssive range of products.',
                head1 : 'Delivering Worldwide',
                head2 : 'Trending Products'
            },
            content : [
                {
                    para : 'Lorem ipsum dolor sit amet, consectetur',
                    head : 'Comfortable Chair',
                    src :  slideImg3
                },
                {
                    para : 'Lorem ipsum dolor sit amet, consectetur',
                    head : 'Relaxing Chair',
                    src :  slideImg1
                },
                {
                    para : 'Lorem ipsum dolor sit amet, consectetur',
                    head : 'Relaxing Sofa',
                    src :  slideImg5
                },
                {
                    para : 'Lorem ipsum dolor sit amet, consectetur',
                    head : 'Sofa Chair',
                    src :  slideImg4
                },
                {
                    para : 'Lorem ipsum dolor sit amet, consectetur',
                    head : 'Beautiful Table',
                    src :  slideImg2
                },
                {
                    para : 'Lorem ipsum dolor sit amet, consectetur',
                    head : 'Beautiful Table',
                    src :  slideImg6
                }
            ]
        }
    }
    toRight() {
        const slideLength = ReactDOM.findDOMNode(this.slider.current).children.length
        if (slideLength > -1) {
            turn++
        } else {
            turn = slideLength
        }
        if ((slideLength - 2) === turn) {
            turn = 0
        }
        ReactDOM.findDOMNode(this.slider.current).styles = {transform: `translateX(-${turn * 300}px)`}
        this.setState({transform: ReactDOM.findDOMNode(this.slider.current).styles.transform})
        // alert(turn)
    }
     toLeft() {
        const slideLength = ReactDOM.findDOMNode(this.slider.current).children.length
        if (slideLength > 0) {
            turn--
        } else {
            turn = slideLength - 1
        }
        if (turn < 0 ) {
            turn = (slideLength - 3)
        }
        ReactDOM.findDOMNode(this.slider.current).styles = {transform: `translateX(-${turn * 300}px)`}
        this.setState({transform: ReactDOM.findDOMNode(this.slider.current).styles.transform})
        // alert(turn)
    }
    render() {
        const sliderChilds = this.state.content.map((content, index)=> <SlideCard key={index.toString()} src={this.state.content[index].src} alt={this.state.content[index].head} head={this.state.content[index].head} para={this.state.content[index].para} />)
        return(
            <section id="shop">
                <section>
                    <Miscsm value={this.state.heading.misc} />
                    <Headbold value={this.state.heading.head1} />
                    <Headbold value={this.state.heading.head2} />
                    <div id="slider">
                        <span className="bi-arrow-left" onClick={this.toLeft} id="left"></span>
                        <div className="slider-childs">
                            <div className="inner-slider" style={{transform : this.state.transform, transition : '0.4s'}} ref={this.slider}>
                                {sliderChilds}
                            </div>
                        </div>
                        <span className="bi-arrow-right" onClick={this.toRight} id="right"></span>
                    </div>
                </section>
            </section>
        )
    }
}

export default Slider