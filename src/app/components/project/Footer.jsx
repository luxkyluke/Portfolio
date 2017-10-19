import React from "react";

import FooterSide from "./FooterSide.jsx";

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="footer">
                <FooterSide 
                    background = {this.props.backgroundPrev} 
                    side="left"
                    link={this.props.linkPrev}
                    title = {this.props.titlePrev}/>
                <FooterSide 
                    background = {this.props.backgroundNext} 
                    side="right"
                    link={this.props.linkNext}
                    title = {this.props.titleNext}/>
            </div>
        );
    }
}
