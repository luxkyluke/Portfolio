import React from "react";


const whiteArrow = require("./../../../img/icons/arrow_down_white.svg");
const blackArrow = require("./../../../img/icons/arrow_down_black.svg");


export default class Scroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"black" : this.props.black};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const tmp = this.state.toggled;
    }

    render() {
        let myClass = "scroll ";
        myClass += (this.state.black) ? "black" : "white";
        const src = this.props.black ? blackArrow : whiteArrow;
        return(
            <a onClick={this.handleClick} >
                <div className={myClass}>
                    <h3 className="scroll__title">scroll</h3>
                    <img className="scroll__arrow" src={src}/>
                </div>
            </a>
        );
    }
}
