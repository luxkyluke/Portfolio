import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router-dom";

import Logo	from "../components/assets/Logo.jsx"
import ProjectsContainer	from "../components/projects/ProjectsContainer.jsx"


export default class Projects extends React.Component{
	constructor(props){
		super(props);
	}

	render(){	
		const myClass = (this.props.isActive) ? " active" : " not-active";
		return(
			<div className={"projects "+myClass}> 
				<div className="projects__veil"></div>
				<div className="projects__content">
			      	<ProjectsContainer isActive={this.props.isActive} up={this.props.up}/>
				</div>
				<Logo click={this.props.up}/>
			</div>
		);
	}
}
