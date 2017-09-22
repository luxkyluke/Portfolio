import React from "react";
require ('./../../utilities/constantes.js');

import Description from "./Description.jsx"

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleClick(){

    }

    render() {

        const myClass = (this.props.id%2 === 0) ? "project even" : "project odd"
        return(
            <div className={myClass}>
                <a onClick={this.handleClick} >
                    <div className="project__filter"></div>
                    <img className="project__img" src={this.props.cover}/>
                </a>
                <Description name ={this.props.name} category={this.props.category}/> 
            </div>
           
        );
    }
}
