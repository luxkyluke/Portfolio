import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';
var smoothScroll = require('smoothscroll');

import HeaderProject    from "./../components/project/HeaderProject.jsx";
import Bandeau          from "./../components/project/Bandeau.jsx";
import Images           from "./../components/project/Images.jsx";
import Footer           from "./../components/project/Footer.jsx";
import Logo             from "./../components/assets/Logo.jsx";
import ProjectAPI       from "./../api/ProjectAPI.jsx";
import Utility          from "./../utilities/utility.js";
import Animation          from "./../utilities/Animation.js";

//const this.state.id = 1;
const NB_PROJECT = ProjectAPI.nbProjects();


export default class Project extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);
        
//        console.log(props.match)
        
//        const this.state.project = this.state.ProjectAPI.get();
        
        this.id = parseInt(props.match.params.id, 10);

        const project = this.getProject(this.id);

        if(!project)
            return;
            
        this.state = {
            scale : 1.1,
            id : this.id,
            project: project
        }

        this.getPrevAndNextProject();

        this.handleScroll = this.handleScroll.bind(this);
        this.goBack = this.goBack.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
        this.changeProject = this.changeProject.bind(this);
        //this.getProject = this.getProject.bind(this);

    }

    
    componentWillReceiveProps(newProps){
        //console.log(newProps);
        console.log(this.state.id);
        const newId = parseInt(newProps.match.params.id, 10);
        console.log(newId)
        if(newId !== this.state.id){
            const project = this.getProject(newId)
            if(!project)
                return;

            console.log(project)

            this.setState({
                id: newId,
                project: project
            })
        }
    }

    componentDidMount() { 
        this._isMounted = true;
       /* history.pushState(null, null, location.href);
        window.onpopstate = function(event) {
            history.go(1);
        };*/


        window.onpopstate = ()=> {
          if(this._isMounted) {
            const { hash } = location;
            console.log(location)
          }
        };
        //window.addEventListener('wheel', this.handleScroll);
        /*if(this.error){
            //setTimeout(function(){
                this.context.router.history.push('/projects');
           // }.bind(this), 100);
        }*/
        this.scrollDist = document.querySelector('.bandeau');
        this.scrollContext = document.querySelector('.project');
    }
    
    componentWillUnmount() {
        //window.removeEventListener('wheel', this.handleScroll);
    }

    getProject(id){
        //var ret
        this.error = false;
        const project = ProjectAPI.get(id);
        
        if(!project){
            console.log("error");
            console.log(id);
            this.error = true;
            this.goBack();
            return false;
        }
        
        return project;
    }

    changeProject(newId){
        /*setTimeout(function(){
            this.context.router.history.push('/');
        }.bind(this), 300); */  
        Animation.switchPage(function(){
            this.context.router.history.push('/project/'+newId);
        }.bind(this));     
    }


    goBack(){
        Animation.switchPage(function(){
            this.context.router.history.push('/projects');
        }.bind(this));
    }

    handleScroll(event: Object){
        const scrollTop = event.nativeEvent.srcElement.scrollTop;
        const delta = scrollTop/(window.innerHeight-300)*0.1;
        let scale = 1.1-delta;
        scale = (scale < 1) ? 1 : scale;
        this.setState({scale:scale});
    }

    getPrevAndNextProject(){
        const prevId = (this.state.id-1 < 0) ? NB_PROJECT-1 : this.state.id-1 ;
        const nextId = (this.state.id+1 >= NB_PROJECT) ? 0 : this.state.id+1 ;
    
        this.prevArticle = ProjectAPI.get(prevId);
        this.nextArticle = ProjectAPI.get(nextId);
    
    }

    scrollDown(){
        smoothScroll(this.scrollDist, 1000, function(){}, this.scrollContext);
    }
    

    render() {
        if(this.error){
            return(<div></div>);
        }
        return(
            <div className="project page" onScroll={this.handleScroll}>
                <Logo black={true} click={this.goBack}/>
                <HeaderProject 
                    type                = {this.state.project.type}
                    title               = {this.state.project.title}
                    desc                = {this.state.project.desc}
                    link                = {this.state.project.link}
                    img                 = {this.state.project.background}
                    blur                = {Utility.getBlurImg(this.state.project.background)}
                    color               = {this.state.project.color}
                    scale               = {this.state.scale}
                    scrollClick         = {this.scrollDown}
                />  
                <div className="project__content">
                    <Bandeau
                        role            = {this.state.project.role}
                        context         = {this.state.project.context}
                        year            = {this.state.project.year}
                        color           = {this.state.project.color}
                        txtcolor        = {this.state.project.txtcolor}
                    />   
                    <Images 
                        imgs            = {this.state.project.imgs}
                    />
                    <Footer 
                        titlePrev       = {this.prevArticle.title}
                        idPrev          = {this.prevArticle.id}
                        backgroundPrev  = {this.prevArticle.background}
                        titleNext       = {this.nextArticle.title}
                        click           = {this.changeProject}
                        idNext          = {this.nextArticle.id}
                        backgroundNext  = {this.nextArticle.background}
                        />
                </div>  
            </div>
        );
    }
}