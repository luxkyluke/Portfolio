import React from "react";
import {Link} from "react-router-dom";

import ProfilPic from './../components/about/ProfilPic.jsx'

export default class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className="about">
                <ProfilPic/>
            </div>
        );
    }
}
