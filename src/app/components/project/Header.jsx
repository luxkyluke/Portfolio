import React from "react";

import Button   from "./../assets/Button.jsx";
import Scroll   from "./../assets/Scroll.jsx";
import Animation   from "./../../utilities/Animation.js";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.scrollDown = this.scrollDown.bind(this);
    }

    scrollDown(){
        console.log('scroll');

        Animation.scrollTo(document.querySelector('.page'), document.querySelector('.bandeau').offsetTop, 700);
    }

    render() {
        //<img className="header__right__img" src={this.props.img} />
        const myStyle = {'backgroundImage' : 'url('+this.props.img+')'};
        const color = {color : this.props.color};
        return(
            <div className="header">
                <div className="header__left">
                    <div className="header__left__wrapper">
                        <h3 className="header__left__wrapper__type" style={color}>{this.props.type}</h3>
                        <h2 className="header__left__wrapper__title">{this.props.title}</h2>
                        <p className="header__left__wrapper__desc">{this.props.desc}</p>
                        <Button 
                            label="see website" 
                            link={this.props.link} 
                            target="_blank"
                            color = {this.props.color}/>
                    </div>

                    
                </div>
                <div className="header__right" style={myStyle}>
                </div>
                <Scroll click={this.scrollDown} black={true}/>
                <Scroll click={this.scrollDown} black={false}/>
            </div>
        );
    }
}
