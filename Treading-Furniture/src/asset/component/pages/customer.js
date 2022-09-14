import React from "react";
import { Headbold } from "../text/heading";
import Table from '../../img/table.png'
import {Custom} from '../card/card'
import Person1 from '../../img/test1.jpg'
import Person2 from '../../img/test2.jpg'

class Customers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            customer : [
                {
                    src: Person1,
                    captions: 'Jane Doe',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus.'
                },
                {
                    src: Person2,
                    captions: 'Jone Doe',
                    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas mi, vel dapibus diam. Mauris malesuada, nisl non rutrum commodo, sem magna laoreet tellus, eu euismod dolor enim et mi. In at tempor purus.'
                }
                
            ],
            head : 'We make sure Customer Satisfaction'
        }
    }
    render() {
        const cards = this.state.customer.map((content, index)=> <Custom key={index.toString()} value={this.state.customer[index].content} src={this.state.customer[index].src} cap={this.state.customer[index].captions} alt={this.state.customer[index].captions} />)
        return(
            <section id='customer'>
                <section>
                    <div className="flex-slide">
                        <div>
                            {cards}
                        </div>
                    </div>
                    <div>
                        <div>
                            <Headbold color='white' value={this.state.head} />
                        </div>
                        <figure>
                            <img src={Table} alt='Table png' />
                        </figure>
                    </div>
                </section>
            </section>
        )
    }
}

export default Customers