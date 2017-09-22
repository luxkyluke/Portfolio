import React from "react";
require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import ScrollDot from "./ScrollDot.jsx"

export default class ScrollDots extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "currentId" : 0
        }

        let projects = new Array();
        for(let i = 0; i < this.props.nb ; i++){
            projects.push(i);
        }

        this.handleScroll = this.handleScroll.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        console.log(s)
    }

    handleClick(id) {
        this.setState({"currentId": id});
    }

    componentDidMount() {
        document.documentElement.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    render() {

        return(

            <div className="scrollDots">
                <ul>
                    <ScrollDot isCurrent={this.state.currentId === 0} click={this.handleClick.bind(this)} id={0}/> 
                    <ScrollDot isCurrent={this.state.currentId === 1} click={this.handleClick.bind(this)} id={1}/> 
                    <ScrollDot isCurrent={this.state.currentId === 2} click={this.handleClick.bind(this)} id={2}/> 
                    <ScrollDot isCurrent={this.state.currentId === 3} click={this.handleClick.bind(this)} id={3}/> 
                    <ScrollDot isCurrent={this.state.currentId === 4} click={this.handleClick.bind(this)} id={4}/> 
                </ul>
            </div>
        );
    }
}
