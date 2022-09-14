import React from "react"
import { Headmd } from "../text/heading";
import { Paramd } from "../text/paragraph";
import { ButtonBlue } from "../button/button";
import { Logo } from "../text/misc-text";

class Contact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contact : {
                head: 'Our Location',
                para: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered .',
                email: 'amin.hsnzadehh@gmail.com',
                number: '1 631 1234 5678',
                location: '123 Park Avenue, New York, United States'
            },
            form : {
                head: 'Get In Touch',
                name: 'Your Name',
                email: 'Your Email',
                subject: 'Subject',
                mess: 'Your Message',
                button: 'Send Message',
                toButton: ''
            },
            socials : [
                {
                    name: 'Facebook',
                    icon: 'bi-facebook nav-icon',
                    link: '#'
                },
                {
                    name: 'Instagram',
                    icon: 'bi-instagram nav-icon',
                    link: '#'
                },
                {
                    name: 'Whatsapp',
                    icon: 'bi-whatsapp nav-icon',
                    link: ''
                },
                {
                    name: 'twitter',
                    icon: 'bi-twitter nav-icon',
                    link: '#'
                },
                {
                    name: 'Linkedin',
                    icon: 'bi-linkedin nav-icon',
                    link: '#'
                },
                {
                    name: 'Youtube',
                    icon: 'bi-youtube nav-icon',
                    link: '#'
                }
            ]
        }
    }
    render() {
        const socials = this.state.socials.map((content, index)=> <li><a href={this.state.socials[index].link}><Logo key={index.toString()} id='nav-btn' class={this.state.socials[index].icon} /></a></li>)
        return(
            <>
                <section id="contact">
                    <section>
                        <div className="form">
                            <Headmd value={this.state.form.head} />
                            <form method="GET" action={this.state.form.toButton}>
                                <div className="form-flex">
                                    <div data-aos="fade-up">
                                        <input autoComplete="off" type='text' name="username" placeholder={this.state.form.name} />
                                        <input autoComplete="off" type='email' name="email" placeholder={this.state.form.email} />
                                        <input autoComplete="off" type='text' name="subject" placeholder={this.state.form.subject} />
                                    </div>
                                    <textarea name="message" placeholder={this.state.form.mess}></textarea>
                                </div>
                                <ButtonBlue value={this.state.form.button} />
                            </form>
                        </div>
                        <div className="contact-content">
                            <Headmd value={this.state.contact.head} />
                            <Paramd value={this.state.contact.para} />
                            <ul>
                                <li><span className="bi-geo-alt"></span>{this.state.contact.location}</li>
                                <li><span className="bi-telephone"></span>{this.state.contact.number}</li>
                                <li><span className="bi-envelope"></span>{this.state.contact.email}</li>
                            </ul>
                        </div>
                    </section>
                </section>
                <footer>
                    <section>
                        <ul>
                            {socials}
                        </ul>
                        <Paramd value='© 2022 . Coded With Love By Amin Hasanzadeh' />
                    </section>
                </footer>
            </>
        )
    }
}

export default Contact 