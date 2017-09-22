import React from "react";
//import Eye from 'svg-react-loader?name=Eye!../../../img/icons/eye_open.svg';

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');


export default class Description extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleClick);
    }

    handleClick(){

    }

    render() {
        return(
            <a onClick={this.handleClick}>
                <div className="desc" >
                    <h3 className="desc__title">Project</h3>
                    <h2 className="desc__name">{this.props.name}</h2>
                    <h3 className="desc__title">Category</h3>
                    <h2 className="desc__category">{this.props.category}</h2>
                    <img className="desc__eye" src="../../../img/icons/eye_open.svg"/>
                </div>
            </a>
        );
    }
}
