import React from "react";
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';


import HeaderProject    from "./../components/project/HeaderProject.jsx";
import Bandeau          from "./../components/project/Bandeau.jsx";
import Images           from "./../components/project/Images.jsx";
import Footer           from "./../components/project/Footer.jsx";
import Logo             from "./../components/assets/Logo.jsx";
import ProjectAPI       from "./../api/ProjectAPI.jsx";
import Utility          from "./../utilities/utility.js";

const PROJECT_ID = 1;
const NB_PROJECT = ProjectAPI.nbProjects();


export default class Project extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }

    constructor(props, context) {
        super(props, context);

        //console.log(props.params.id);

        //const project = ProjectAPI.get(parseInt("props.match.params.id", 10));
        const project = ProjectAPI.get(PROJECT_ID);
        if(!project){
            this.goBack();
        }

        console.log(project)        

        this.state = {
            project : project,
            scale : 1.1
        }

        this.getPrevAndNextProject();
        this.handleScroll = this.handleScroll.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack(){
        this.context.router.history.push('/projects');

    }

    componentDidMount() { 
        //window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        //window.removeEventListener('wheel', this.handleScroll);
    }

    handleScroll(event: Object){
        const scrollTop = event.nativeEvent.srcElement.scrollTop;
        const delta = scrollTop/(window.innerHeight-350)*0.1;
        let scale = 1.1-delta;
        scale = (scale < 1) ? 1 : scale;
        this.setState({scale:scale});
    }

    getPrevAndNextProject(){
        this.prevId = (PROJECT_ID-1 < 0) ? NB_PROJECT-1 : PROJECT_ID-1 ;
        this.nextId = (PROJECT_ID+1 > NB_PROJECT) ? 0 : PROJECT_ID+1 ;

        this.prevArticle = ProjectAPI.get(this.prevId);
        this.nextArticle = ProjectAPI.get(this.nextId);
    }

    

    render() {
        const myStyle= (this.state.scroll) ? {'transform':'translateY(-100%)'} : {};
        return(
            <div className="project page" onScroll={this.handleScroll}>
                <Logo black={true} click={this.goBack}/>
                <HeaderProject 
                    type    = {this.state.project.type}
                    title   = {this.state.project.title}
                    desc    = {this.state.project.desc}
                    link    = {this.state.project.link}
                    img     = {this.state.project.background}
                    color   = {this.state.project.color}
                    scale   = {this.state.scale}
                /> 
                <div className="project__content">
                    <Bandeau
                         role    = {this.state.project.role}
                        context = {this.state.project.context}
                        year    = {this.state.project.year}
                        color   = {this.state.project.color}
                        txtcolor   = {this.state.project.txtcolor}
                    />   
                    <Images 
                        imgs     = {this.state.project.imgs}
                    />
                    <Footer 
                        titlePrev = {this.prevArticle.title}
                        linkPrev= {"/project/"+this.prevId}
                        backgroundPrev = {this.prevArticle.background}
                        titleNext = {this.nextArticle.title}
                        linkNext= {"/project/"+this.nextId}
                        backgroundNext = {this.nextArticle.background}
                        />
                </div>  
            </div>
        );
    }
}