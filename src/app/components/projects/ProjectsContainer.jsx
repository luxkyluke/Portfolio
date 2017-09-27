import React from "react";
require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import Project from "./Project.jsx"
import Animation from "./../../utilities/Animation.js"
import ScrollDots   from "../../components/projects/ScrollDots.jsx"


const cover1 = require('./../../../img/project1.jpg');
const cover2 = require('./../../../img/project1.jpg');
const NB_PROJECT = 5;

export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'currentId':0
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickDots = this.handleClickDots.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        console.log(s)
    }

    handleClickDots(id){
        this.setState({"currentId": id});
    }

    handleClick(){
        Animation.hideProject(this.state.currentId);
    }

    componentDidMount() {
        document.documentElement.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        return(
            <div className="projectsContainer">
                <Project 
                    cover={cover1} 
                    id="0" 
                    isActive = {this.state.currentId === 0}
                    name ="The Railway Chronicles" 
                    category="Website"
                    click={this.handleClick}/> 
                <Project 
                    cover={cover2} 
                    id="1" 
                    isActive = {this.state.currentId === 1}
                    name ="The Railway Chronicles" 
                    category="Website"
                    click = {this.handleClick}/> 
                <ScrollDots 
                    nb={NB_PROJECT} 
                    click={this.handleClickDots}
                    currentId = {this.state.currentId}/>
            </div>

        );
    }
}
