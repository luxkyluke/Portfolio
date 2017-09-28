import React from "react";
require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import Project from "./Project.jsx"
import Animation from "./../../utilities/Animation.js"
import ScrollDots   from "../../components/projects/ScrollDots.jsx"


const cover1 = require('./../../../img/project1.jpg');
const cover2 = require('./../../../img/project1.jpg');
const cover3 = require('./../../../img/project1.jpg');
const cover4 = require('./../../../img/project1.jpg');
const cover5 = require('./../../../img/project1.jpg');

const NB_PROJECT = 5;

export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'currentId':0
        };

        this.isAnimated = false;

        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickDots = this.handleClickDots.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(e){
        if(this.isAnimated){
            return;
        }

        this.isAnimated = true;
        const dir = e.deltaY/Math.abs(e.deltaY);
        //console.log(dir);
        this.navProject(dir);
        
        window.removeEventListener('wheel', this.handleScroll);
    }

    navProject(dir){
        let nextId = (this.state.currentId+dir)%NB_PROJECT;
        if(nextId<0)
            nextId = NB_PROJECT-1;
        this.handleClickDots(nextId)
        console.log(nextId)
    }

    handleClickDots(id){
        Animation.hideProject(this.state.currentId, function(){
            this.setState({"currentId": id});
            this.isAnimated = false;
            window.addEventListener('wheel', this.handleScroll);

        }.bind(this));

        
    }

    handleClick(){
    }

    componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
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
                <Project 
                    cover={cover3} 
                    id="2" 
                    isActive = {this.state.currentId === 2}
                    name ="The Railway Chronicles" 
                    category="Website"
                    click = {this.handleClick}/> 
                <Project 
                    cover={cover4} 
                    id="3" 
                    isActive = {this.state.currentId === 3}
                    name ="The Railway Chronicles" 
                    category="Website"
                    click = {this.handleClick}/> 
                <Project 
                    cover={cover5} 
                    id="4" 
                    isActive = {this.state.currentId === 4}
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
