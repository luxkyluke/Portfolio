import React from "react";


export default class ImgBloc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myStyle = {'backgroundImage' : 'url('+this.props.src+')'};
        const myClass = (this.props.full) ? " full" : "";
        return(
            <div className={'imgBloc'+myClass} >
                <div className="imgBloc__img" style={myStyle}>
                    
                </div>    
            </div>
        );
    }
}
