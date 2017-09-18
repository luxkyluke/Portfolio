import React from "react";

/*
 Pour construire ce bouton, il faut lui donner :
 - "label" : le texte du bouton
 - "property" : une propriété, qui sera donnée en paramètre du callback
 - "callback" : la fonction de callback
 */

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggled: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const tmp = this.state.toggled;
        this.setState({
            toggled: false
        });
        this.props.callback(this.props.property);
    }

    render() {
        const myClass = this.state.toggled ? "button toggled" : "button not-toggled";
        return(
            <a onClick={this.handleClick} className={myClass}>
                {this.props.label}
            </a>
        );
    }
}
