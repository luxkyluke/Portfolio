import React from "react";


export default class ImgBloc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myClass = (this.props.full) ? " full" : "";
        return(
            <div className={'imgBloc'+myClass} >
                <div className="imgBloc__frame">
                    <img className="imgBloc__frame__img" src={this.props.src} />
                </div>    
            </div>
        );
    }
}
