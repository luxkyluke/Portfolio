import React from "react";
import PropTypes from 'prop-types';
import Project from "./ProjectMin.jsx";
import Animation from "./../../utilities/Animation.js";
import ScrollDots   from "../../components/projects/ScrollDots.jsx";
import Scroll from "../../components/assets/Scroll.jsx";
import ProjectAPI from "../../api/ProjectApi.jsx";
import Utility from './../../utilities/utility.js';

require ('./../../utilities/constantes.js');




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
        this.handleResize = this.handleResize.bind(this);
        this.next = this.next.bind(this);
        let id = 0;
        if(localStorage.getItem('lastProjectId')){
            id = parseInt(localStorage.getItem('lastProjectId'))-1;
        }
        this.state = {
            'currentId': id,
            'isActive':this.props.isActive
        };

        this.projects = ProjectAPI.all();

        this.state = {
            'currentId': id,
            'isActive':this.props.isActive,
            'allActive' : false
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isActive !== this.state.isActive){
            if(nextProps.isActive){
                setTimeout(function(){
                    this.setState({'isActive':nextProps.isActive});
                }.bind(this), 1200);
            }else
                this.setState({'isActive':nextProps.isActive});
        }
    }

    handleScroll(e){
        if(!this.state.isActive){
            return;
        }

        const dir = e.deltaY/Math.abs(e.deltaY);
        this.navProject(dir);
    }


    handleResize(){
        if(Utility.isTablet() && !this.state.allActive){
            window.removeEventListener('wheel', this.handleScroll);
            this.setState({allActive : true});
        }else if(!Utility.isTablet() && this.state.allActive){
            window.addEventListener('wheel', this.handleScroll);
            this.setState({allActive : false});
        }
    }

    navProject(dir){
        let nextId = (this.state.currentId+dir)%NB_PROJECT;
        if(isNaN(nextId)){
            return;
        }
        if(nextId < 0){
            this.props.up();
            return;
        }
        window.removeEventListener('wheel', this.handleScroll);
        this.changeProject(nextId);
    }

    next(){
        this.navProject(1);
    }

    changeProject(id){
        Animation.changeProjectMin(this.state.currentId, id, function(){
            this.setState({"currentId": id});
            setTimeout(function(){
                window.addEventListener('wheel', this.handleScroll);
            }.bind(this), 1000);
        }.bind(this));
    }

    handleClickDots(id){
        this.changeProject(id);       
    }

    handleClick(id){
        Animation.openProject(this.state.currentId, this.projects[id].color, function(){
           this.context.router.history.push("/work/"+id);
        }.bind(this))

        //history.push('/project');
    }

    componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('wheel', this.handleScroll);
    }

    render() {
        return(
            <div>
                <div className="projectsContainer">
                    <Project 
                        name={this.projects[0].name} 
                        id="0" 
                        isActive = {this.state.currentId === 0 || this.state.allActive}
                        title = {this.projects[0].title}
                        category= {this.projects[0].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[1].name} 
                        id="1" 
                        isActive = {this.state.currentId === 1 || this.state.allActive}
                        title = {this.projects[1].title}
                        category= {this.projects[1].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[2].name} 
                        id="2" 
                        isActive = {this.state.currentId === 2 || this.state.allActive}
                        title = {this.projects[2].title}
                        category= {this.projects[2].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[3].name} 
                        id="3" 
                        isActive = {this.state.currentId === 3 || this.state.allActive}
                        title = {this.projects[3].title}
                        category= {this.projects[3].type}
                        click={this.handleClick}/> 
                    <Project 
                        name={this.projects[4].name} 
                        id="4" 
                        isActive = {this.state.currentId === 4 || this.state.allActive}
                        title = {this.projects[4].title}
                        category= {this.projects[4].type}
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
