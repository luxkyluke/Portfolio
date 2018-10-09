import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import ProfilPic from './../components/about/ProfilPic.jsx'
import Logo from './../components/assets/Logo.jsx';
import Animation from './../utilities/Animation.js';
import mailIcon from './../img/mail.svg';
import docIcon from './../img/doc.svg';
import instaIcon from './../img/ig.png';
import gitIcon from './../img/github.png';
import twitterIcon from './../img/twitter.png';

export default class About extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props) {
        super(props);

        this.handleLogoClick = this.handleLogoClick.bind(this);
    }

    handleLogoClick(){
        Animation.switchPage(function(){
            this.context.router.history.push('/');
        }.bind(this));
    }

    /*
     <p>I'm a student in <a target="_blank" href="https://www.ingenieur-imac.fr/"  rel="noopener">IMAC</a> a university which specializes in creative engineering.
                             It is here that I learned 3D programming, web design and filming techniques.</p>

                            <p>From a young age, I have been passionate about theatre and arts.  
                             I’m particularly fascinated by computer art, generative design and video mapping.
                             I love photography, especially film.</p><p>
                            You can find some of my photos <a target="_blank" href="https://www.antoinedemiere.com/FilmPhotography/"  rel="noopener">here</a>.</p>

                            <p>Graduated of a multimedia engineering school in 2018, I have a vast field of skill that gather web development and web design, but also 3D and interactive programming, and photography and audiovisual.</p>

                            <p>From a young age, I’m passionate about performance art, music and new technology, that what drives me to create in a goal to share. That why I want to develop digitales interactives experiences for general public via installations or websites.</p>
                            
    */
    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className="about page">
                <Logo click={this.handleLogoClick}/>
                <div className="about__veil"></div>
                <div className="about__wrapper">
                    <ProfilPic/>
                    <div className="about__texte">
                        <div className="about__texte__wrapper">
                            <p>Hi ! I'm <span>Antoine Demière</span> a french creative engineer based in Paris, France.</p>
                            <p>Graduated from a multimedia engineering school in 2018. I have a vast range of skills that include web design and development, 3D and interactive programming, photography and audio visual technology.</p>

                            <p>From a young age, I’ve always had a passion for performance art, music and emerging technology. This passion drives me to create with the intent of bringing people together. This is why I want to develop digital interactive experiences for everyone through installations and/or websites. </p>
                            
                            <p>I am currently seeking <a target="_blank" href="https://www.malt.fr/profile/antoinedemiere"  rel="noopener">freelance</a> work in web design and development, and interactive development. 
                            </p>
                            <p>So feel free to contact me ! </p> 
                            <ul className="about__socials">
                                <li className="about__socials__item">
                                    <a title="Email"  target='_blank' href="mailto:demiere.a@gmail.com"><img className="about__socials__item__icon" src={mailIcon}/></a>
                                </li>
                                <li className="about__socials__item">
                                    <a title="Instagram" target='_blank' href="https://www.instagram.com/antoinedemiere/"><img className="about__socials__item__icon" src={instaIcon}/></a>
                                </li>
                                <li className="about__socials__item">
                                    <a title="Github"  target='_blank' href="https://github.com/luxkyluke"><img className="about__socials__item__icon" src={gitIcon}/></a>
                                </li>
                                <li className="about__socials__item">
                                    <a title="Twitter" href="https://twitter.com/AntoineDemiere" target="_blank" rel="noopener"><img className="about__socials__item__icon" src={twitterIcon}/></a>
                                </li>
                                <li className="about__socials__item">
                                    <a title="Resume" href="./data/cv.pdf" target="_blank" rel="noopener"><img className="about__socials__item__icon" src={docIcon}/></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
