import React from "react";
require ('./../../utilities/constantes.js')

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');

import Project from "./Project.jsx"

const cover1 = require('./../../../img/project1.jpg');
const cover2 = require('./../../../img/project1.jpg');


export default class ProjectsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleScroll = this.handleScroll.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
        console.log(s)
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
                <Project cover={cover1} id="0" name ="The Railway Chronicles" category="Website"/> 
                <Project cover={cover2} id="1" name ="The Railway Chronicles" category="Website"/> 
            </div>
        );
    }
}
