import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Logo	from "../components/assets/Logo.jsx"
import Scroll	from "../components/assets/Scroll.jsx"
import BurgerMenu	from "../components/assets/BurgerMenu.jsx"
import ScrollDots	from "../components/projects/ScrollDots.jsx"
import ProjectsContainer	from "../components/projects/ProjectsContainer.jsx"
	
export default class Projects extends React.Component{
	constructor(props){
		super(props);
	}

	render(){	
		return(
			<div className="projects page"> 
				<div className="projects__veil"></div>
				<div className="projects__content">
					<Logo/>
			      	<Scroll black={false}/>
			      	<BurgerMenu/>
			      	<ScrollDots nb={5}/>
			      	<ProjectsContainer/>
				</div>
			</div>
		);
	}
}
