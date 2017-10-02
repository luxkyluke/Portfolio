import React from "react";
require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import ScrollDot from "./ScrollDot.jsx"

export default class ScrollDots extends React.Component {
    constructor(props) {
        super(props);

        /*this.state = {
            "currentId" : 0
        }*/

        let projects = new Array();
        for(let i = 0; i < this.props.nb ; i++){
            projects.push(i);
        }

        //this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }


    handleClick(id) {
        this.props.click(id);
    }

    

    render() {

        return(

            <div className="scrollDots">
                <ScrollDot 
                    isCurrent={this.props.currentId === 0}
                    click={this.handleClick} 
                    id={0}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 1}
                    click={this.handleClick} 
                    id={1}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 2}
                    click={this.handleClick} 
                    id={2}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 3}
                    click={this.handleClick} 
                    id={3}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 4}
                    click={this.handleClick} 
                    id={4}/> 
            </div>
        );
    }
}
