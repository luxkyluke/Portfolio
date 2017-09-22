import React from "react";
require ('./../../utilities/constantes.js')

export default class ScrollDot extends React.Component {
    constructor(props) {
        super(props);
        

       // this.handleClick = this.handleClick.bind(this);
        //this.reset = this.reset.bind(this);
    }

    /*handleClick() {
        //lancer la fonction passer en props
        console.log("clciuk")
        if(!this.state.current){
            this.props.reset();
            this.setState = {
                "current" : true
            }
        }
    }*/

    /*reset(){
        this.setState = {
            "current" : false
        }
    }*/

    render() {
        const myClass = (this.props.isCurrent) ? "scrollDot current" : "scrollDot";
        return(
            <a onClick={this.props.click.bind(this, this.props.id)}>
                <li className={myClass}>
                </li>
            </a>
        );
    }
}
