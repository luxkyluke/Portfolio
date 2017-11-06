import React from "react";
import {Link} from "react-router-dom";


import pp from "./../../../img/pp.jpg";
import TiltFx from "./../../utilities/AnimPicture.js";

export default class ProfilPic extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const t = new TiltFx(document.querySelector('a.tilter'));
        //t.init();
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className="profilPic">
                <a href="#" className="tilter tilter--1">
                    <figure className="tilter__figure">                        <img className="tilter__image" src={pp} alt="pp"/>
                        <div className="tilter__deco tilter__deco--shine">
                            <div></div>
                        </div>
                        <svg className="tilter__deco tilter__deco--lines" viewBox="0 0 300 415">
                            <path d="M20.5,20.5h260v375h-260V20.5z"></path>
                        </svg> 
                    </figure>
                </a>
            </div>
        );
    }
}
