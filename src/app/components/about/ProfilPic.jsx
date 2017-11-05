import React from "react";
import {Link} from "react-router-dom";

export default class ProfilPic extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {backgroundImage:'url('+this.props.background+')'};
        return(
            <div className="profilPic">
                
            </div>
        );
    }
}
