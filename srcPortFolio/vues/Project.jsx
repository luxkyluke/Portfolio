import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

import HeaderProject    from "./../components/project/HeaderProject.jsx";
import Bandeau          from "./../components/project/Bandeau.jsx";
import Images           from "./../components/project/Images.jsx";
import Footer           from "./../components/project/Footer.jsx";
import Logo             from "./../components/assets/Logo.jsx";
import ProjectAPI       from "./../api/ProjectApi.jsx";
import Utility          from "./../utilities/utility.js";
import Animation        from "./../utilities/Animation.js";
import smoothScroll    from 'smoothscroll';

//const this.state.id = 1;
const NB_PROJECT = ProjectAPI.nbProjects();


export default class Project extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);
        
        this.id = parseInt(props.match.params.id, 10);

        const project = this.getProject(this.id);

        if(!project)
            return;
            
        const footer = this.getPrevAndNextProject(this.id);

        this.state = {
            scale : 1.1,
            id : this.id,
            project: project,
            prevArticle : footer.prev,
            nextArticle : footer.next
        }


        this.handleScroll = this.handleScroll.bind(this);
        this.goBack = this.goBack.bind(this);
        this.scrollDown = this.scrollDown.bind(this);
        this.changeProject = this.changeProject.bind(this);
        this.getPrevAndNextProject = this.getPrevAndNextProject.bind(this);
    }

    
    componentWillReceiveProps(newProps){
        const newId = parseInt(newProps.match.params.id, 10);
        if(newId !== this.state.id){
            const project = this.getProject(newId)
            if(!project)
                return;


            const footer = this.getPrevAndNextProject(newId);

            this.setState({
                id: newId,
                project: project,
                prevArticle : footer.prev,
                nextArticle : footer.next
            });
            const page = document.scrollingElement ? document.scrollingElement : document.body
            page.scrollTop = 0;
            if(localStorage)
                localStorage.setItem('lastProjectId', newId+1);
        }
    }

    componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
        this.scrollDist = document.querySelector('.bandeau');
        this.scrollContext = document.scrollingElement ? document.scrollingElement : document.body
        if(localStorage)
            localStorage.setItem('lastProjectId', this.state.id+1);
    }
    
    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);    
    }

    getProject(id){
        this.error = false;
        const project = ProjectAPI.get(id);
        
        if(!project){
            this.error = true;
            this.goBack();
            return false;
        }
        
        return project;
    }

    changeProject(newId){
        Animation.switchPage(function(){
            this.context.router.history.push('/work/'+newId);
        }.bind(this));     
    }

    goBack(){
        Animation.switchPage(function(){
            this.context.router.history.push('/work');
        }.bind(this));
    }

    handleScroll(e:Object){
        const page = document.scrollingElement ? document.scrollingElement : document.body;
        const scrollTop = page.scrollTop;
        const delta = scrollTop/(window.innerHeight-300)*0.1;
        let scale = 1.1-delta;
        scale = (scale < 1) ? 1 : scale;
        if(this.state.scale !== scale)
            this.setState({scale:scale});
    }

    getPrevAndNextProject(id){
        const prevId = (id-1 < 0) ? NB_PROJECT-1 : id-1 ;
        const nextId = (id+1 >= NB_PROJECT) ? 0 : id+1 ;
        
        return {prev: ProjectAPI.get(prevId), next: ProjectAPI.get(nextId)};
    }

    scrollDown(){
        smoothScroll(this.scrollDist, 1000, function(){}, this.scrollContext);
    }
    

    render() {
        if(this.error){
            return(<div></div>);
        }
        return(
            <div className="project page" >
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
                        titlePrev       = {this.state.prevArticle.title}
                        idPrev          = {this.state.prevArticle.id}
                        backgroundPrev  = {this.state.prevArticle.background}
                        titleNext       = {this.state.nextArticle.title}
                        click           = {this.changeProject}
                        idNext          = {this.state.nextArticle.id}
                        backgroundNext  = {this.state.nextArticle.background}
                        />
                </div>  
            </div>
        );
    }
}