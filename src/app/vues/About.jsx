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
                <div className="about__wrapper">
                    <ProfilPic/>
                    <div className="about__texte">
                        <div className="about__texte__wrapper">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis 
                            maxime aspernatur sit nesciunt deleniti. Molestiae alias voluptatem 
                            quisquam incidunt, quam! Voluptates molestias reiciendis natus quibusdam, 
                            ut neque corporis itaque facere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis 
                            maxime aspernatur sit nesciunt deleniti. Molestiae alias voluptatem 
                            quisquam incidunt, quam! Voluptates molestias reiciendis natus quibusdam, 
                            ut neque corporis itaque facere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis 
                            maxime aspernatur sit nesciunt deleniti. Molestiae alias voluptatem 
                            quisquam incidunt, quam! Voluptates molestias reiciendis natus quibusdam, 
                            ut neque corporis itaque facere! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis 
                            maxime aspernatur sit nesciunt 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
