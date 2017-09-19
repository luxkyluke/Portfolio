import React from "react";


export default class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        //lancer la fonction passer en props
    }

    render() {
        return(
            <a onClick={this.handleClick} >
                <div className="logo">
                    <h2 className="logo__title">Antoine Demiere</h2>
                </div>
            </a>
        );
    }
}
