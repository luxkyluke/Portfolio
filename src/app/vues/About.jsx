import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';

import ProfilPic from './../components/about/ProfilPic.jsx'
import Logo from './../components/assets/Logo.jsx';
import Animation from './../utilities/Animation.js';

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
                            <p>Hi ! I'm <span>Antoine Demière</span> a french creative engineer living in Paris, France.</p>
                            <p>I'm a student in <a target="_blank" href="https://www.ingenieur-imac.fr/"  rel="noopener">IMAC</a> a university which specializes in creative engineering.
                             It is here that I learned 3D programming, web design and filming techniques.</p>

                            <p>From a young age, I have been passionate about theatre and arts.  
                             I’m particularly fascinated by computer art, generative design and video mapping.
                             I love photography, especially film.</p><p>
                            You can find some of my photos <a target="_blank" href="https://500px.com/demierea"  rel="noopener">here</a>.</p>
                            
                            <p>I'm currently seeking a 6 months internship as a creative web developer 
                            or in the field of interactive installation.</p> 
                            <p>Feel free to contact me via mail at 
                                <a href="mailto:demiere.a@gmail.com"> demiere.a@gmail.com</a>
                                <br/>Or download my <a href="./data/cv.pdf" target="_blank" rel="noopener"> french resume</a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
