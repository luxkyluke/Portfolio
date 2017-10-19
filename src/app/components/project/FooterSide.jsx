import React from "react";
import {Link} from "react-router-dom";

const arrow = require('./../../../img/icons/arrow_next.svg');

export default class FooterSide extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className={"footer__side "+this.props.side} style={myStyle}>
                <Link to={this.props.link} onClick={this.props.click}>
                    <div className={"footer__side__wrapper"}>
                        <h2 className="footer__side__title">{this.props.title}</h2>  
                        <img className="footer__side__arrow" src={arrow}/>
                    </div>
                </Link>
            </div>
        );
    }
}
