import React from "react";
require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import Project from "./Project.jsx"
import Animation from "./../../utilities/Animation.js"
import ScrollDots   from "../../components/projects/ScrollDots.jsx"
import Scroll from "../../components/assets/Scroll.jsx"


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
            'currentId':0,
            'isActive':this.props.isActive
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickDots = this.handleClickDots.bind(this);
        this.next = this.next.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }
    
    componentWillReceiveProps(nextProps) {
        if(nextProps.isActive !== this.state.isActive){
            setTimeout(function(){
                this.setState({'isActive':nextProps.isActive});
            }.bind(this), 1500);
        }
    }

    handleScroll(e){
        if(!this.state.isActive){
            return;
        }
        //console.log(e);

        const dir = e.deltaY/Math.abs(e.deltaY);
        //console.log(dir);
        this.navProject(dir);
    }


    navProject(dir){
        let nextId = (this.state.currentId+dir)%NB_PROJECT;
        if(nextId<0){
            this.props.up();
            return;
        }
        window.removeEventListener('wheel', this.handleScroll);
        this.changeProject(nextId);
        console.log(nextId);
    }

    next(){
        this.navProject(1);
    }

    changeProject(id){
        Animation.hideProject(this.state.currentId, function(){
            this.setState({"currentId": id});
            window.addEventListener('wheel', this.handleScroll);
        }.bind(this));
    }

    handleClickDots(id){
        this.changeProject(id);       
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
            <div>
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
                <Scroll click={this.next}/>
            </div>
        );
    }
}
