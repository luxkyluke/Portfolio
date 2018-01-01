import React from "react";
import {Link} from "react-router-dom";
//import ProgressiveImage from "react-progressive-image-loading";
import ProgressiveImage from "./../../utilities/ProgressiveBGImgLoader.jsx";

import Utility from './../../utilities/utility.js';


const arrow = require('./../../../img/icons/arrow_next.svg');

export default class FooterSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className={"footer__side "+this.props.side}>
                <a onClick={this.props.click.bind(this, this.props.id)}>
                    <div className="footer__side__scaler">
                        {/*<div className="footer__side__img" style= { myStyle } />*/}
                        <ProgressiveImage
                            blur={Utility.getBlurImg(this.props.background)}
                            src={this.props.background}
                            className='footer__side__img'
                        />
                    </div>
                    <div className={"footer__side__wrapper"}>
                        <h2 className="footer__side__title">{this.props.title}</h2>  
                        <img className="footer__side__arrow" src={arrow}/>
                    </div>
                </a>
            </div>
        );
    }
}
