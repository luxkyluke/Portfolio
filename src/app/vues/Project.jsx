import React from "react";
import {withRouter} from "react-router-dom";


import Header       from "./../components/project/Header.jsx";
import Bandeau      from "./../components/project/Bandeau.jsx";
import Images       from "./../components/project/Images.jsx";
import Logo       from "./../components/assets/Logo.jsx";
import ProjectAPI   from "./../api/ProjectAPI.jsx";

const bg = require('./../../data/the_railway_chronicles/background.jpg');
const img1 = require('./../../data/the_railway_chronicles/1.jpg');
const img2 = require('./../../data/the_railway_chronicles/2.jpg');
const img3 = require('./../../data/the_railway_chronicles/3.jpg');
const img4 = require('./../../data/the_railway_chronicles/4.jpg');
const img5 = require('./../../data/the_railway_chronicles/5.jpg');

const PROJECT_ID = 1;

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        //const project = ProjectAPI.get(parseInt("props.match.params.id", 10));
        const project = ProjectAPI.get(PROJECT_ID);
        if(!project){
            history.push('/projects');
        }

        console.log(project)

        this.imgs = [
            {
              src : img1,
              full: false
            },
            {
              src : img3,
              full: false
            },
            {
              src : img2,
              full: true
            },
            {
              src : img4,
              full: false
            },
            {
              src : img5,
              full: false
            }
        ]



        this.state = {
            project : project
        }
    }


    render() {
        return(
            <div className="project page">
                <Logo black={true}/>
                <Header 
                    type    = {this.state.project.type}
                    title   = {this.state.project.title}
                    desc    = {this.state.project.desc}
                    link    = {this.state.project.link}
                    img     = {bg}
                    color   = {this.state.project.color}
                />     
                <Bandeau 
                    role    = {this.state.project.role}
                    context = {this.state.project.context}
                    year    = {this.state.project.year}
                    color   = {this.state.project.color}
                    txtcolor   = {this.state.project.txtcolor}
                />   
                <Images 
                    imgs     = {this.imgs}
                />
            </div>
        );
    }
}