import React from "react";

export default class BandeauTxtBloc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="bandeau_bloc">
                <h3 className="bandeau_bloc__title"></h3>
                <h2 className="bandeau_bloc__label"></h2>
            </div>
        );
    }
}
