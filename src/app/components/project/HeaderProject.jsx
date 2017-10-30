import React from "react";
//import Scroll from 'react-scroll'; // Imports all Mixins
 

import Button   from "./../assets/Button.jsx";
import ScrollArrow   from "./../assets/Scroll.jsx";
import Animation   from "./../../utilities/Animation.js";

export default class HeaderProject extends React.Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        //<img className="header__right__img" src={this.props.img} />
        const background = {'backgroundImage' : 'url('+this.props.img+')',
            'transform':'scale('+this.props.scale+')'
        }
        const color = {color : this.props.color};
        return(
            <div className="header_project">
                <div className="header_project__left">
                    <div className="header_project__left__wrapper">
                        <h3 className="header_project__left__wrapper__type" style={color}>{this.props.type}</h3>
                        <h2 className="header_project__left__wrapper__title">{this.props.title}</h2>
                        <p className="header_project__left__wrapper__desc">{this.props.desc}</p>
                        <Button 
                            label="see website" 
                            link={this.props.link} 
                            target="_blank"
                            color = {this.props.color}/>
                    </div>

                    
                </div>
                <div className="header_project__right" style={background}>
                </div>
                <ScrollArrow click={this.props.scrollClick} black={true}/>
                <ScrollArrow click={this.props.scrollClick} black={false}/>
            </div>
        );
    }
}
