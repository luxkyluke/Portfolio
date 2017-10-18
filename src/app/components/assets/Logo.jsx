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
        const color = (this.props.black) ? "#000" : "#f3f3f3";
        const myStyle = {'color' : color};
        return(
            <a onClick={this.props.click} >
                <div className="logo" style={myStyle}>
                    <h2 className="logo__title">Antoine Demiere</h2>
                </div>
            </a>
        );
    }
}
