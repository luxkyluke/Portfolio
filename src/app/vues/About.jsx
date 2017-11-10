import React from "react";
import {Link} from "react-router-dom";

import ProfilPic from './../components/about/ProfilPic.jsx'
import Logo from './../components/assets/Logo.jsx';

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className="about">
                <Logo/>
                <div className="about__veil"></div>
                <div className="about__wrapper">

                    <ProfilPic/>
                    <div className="about__texte">
                        <div className="about__texte__wrapper">
                            <p>Hi ! I'm <span>Antoine Demière</span> a french creative developper living in Paris.</p>
                            <p>I'm student in <a href="https://www.ingenieur-imac.fr/">IMAC</a> a school which
                            make creative ingenieers. It taught me 3D programming, web design and filming secrets</p>

                            <p>I'm passionate by the theatre and acting. I also love photography, 
                            especially film photo, if you're interested, you can find some of my photos <a href="#">here</a>. 
                            Then I'm also fanisated by compture art and generative design</p>
                            
                            <p>I'm currently looking for a 6 months internship as creative developper in
                            web feild or for interactive installations.</p> 
                            <p>Feel free to contact me by mail at 
                                <a href="mailto:demiere.a@gmail.com">demiere.a@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
