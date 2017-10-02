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
    }

    handleClick() {

    }

    render() {
        return(
            <a href={this.props.link}>
                <div className="button">
                    {this.props.label}
                </div>
            </a>
        );
    }
}
