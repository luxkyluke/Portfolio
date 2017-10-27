import React from "react";
import PropTypes from 'prop-types';

require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import Project from "./ProjectMin.jsx"
import Animation from "./../../utilities/Animation.js"
import ScrollDots   from "../../components/projects/ScrollDots.jsx"
import Scroll from "../../components/assets/Scroll.jsx"
import ProjectAPI from "../../api/ProjectAPI.jsx"


const cover1 = require('./../../../img/project1.jpg');
const cover2 = require('./../../../img/project1.jpg');
const cover3 = require('./../../../img/project1.jpg');
const cover4 = require('./../../../img/project1.jpg');
const cover5 = require('./../../../img/project1.jpg');

const NB_PROJECT = ProjectAPI.nbProjects();

export default class ProjectsContainer extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);


        this.handleClick = this.handleClick.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClickDots = this.handleClickDots.bind(this);
        this.next = this.next.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);

        this.state = {
            'currentId':0,
            'isActive':this.props.isActive
        };

        this.projects = ProjectAPI.all();

        this.state = {
            'currentId':0,
            'isActive':this.props.isActive
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isActive !== this.state.isActive){
            if(nextProps.isActive){
                setTimeout(function(){
                    this.setState({'isActive':nextProps.isActive});
                }.bind(this), 1500);
            }else
                this.setState({'isActive':nextProps.isActive});

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
        if(nextId < 0){
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
       this.context.router.history.push("/project");
        //history.push('/project');
    }

    componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        /* */
        return(
            <div>
                <div className="projectsContainer">
                    <Project 
                        cover={this.projects[0].background} 
                        id="0" 
                        isActive = {this.state.currentId === 0}
                        name = {this.projects[0].title}
                        category= {this.projects[0].type}
                        click={this.handleClick}/> 
                    <Project 
                        cover={this.projects[1].background} 
                        id="1" 
                        isActive = {this.state.currentId === 1}
                        name = {this.projects[1].title}
                        category= {this.projects[1].type}
                        click={this.handleClick}/> 
                    <Project 
                        cover={this.projects[2].background} 
                        id="2" 
                        isActive = {this.state.currentId === 2}
                        name = {this.projects[2].title}
                        category= {this.projects[2].type}
                        click={this.handleClick}/> 

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
