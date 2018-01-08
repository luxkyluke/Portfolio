import React from "react";

export default class BandeauTxtBloc extends React.Component {
    constructor(props) {
        super(props);
        this.state={label:this.getLabel(this.props.label)}
    }

    getLabel(label){
        return label.split('<br>').map(function(item, key) {
            return (
                <span key={key} className="bandeau__bloc__label">
                    <p className="bandeau__bloc__label__text" dangerouslySetInnerHTML={{__html: item}}/>
                </span>
            )
        })
    }

    componentWillReceiveProps(newProps){
        if(this.state.label !== newProps.label)
            this.setState({label:this.getLabel(newProps.label)})
    }

    render() {
        const color = {color : this.props.color};
        return(
            <div className="bandeau__bloc">
                <h3 className="bandeau__bloc__title" style={color}>{this.props.title}</h3>
                {this.state.label}
            </div>
        );
    }
}
