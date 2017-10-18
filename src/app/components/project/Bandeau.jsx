import React from "react";

import BandeauBloc  from "./BandeauTxtBloc.jsx";

export default class Bandeau extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="bandeau">
                <BandeauBloc title="role" label={this.props.role}/>
                <BandeauBloc title="context" label={this.props.context}/>
                <BandeauBloc title="year" label={this.props.year}/>
            </div>
        );
    }
}
