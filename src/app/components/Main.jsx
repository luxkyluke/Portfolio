import { Route, Switch, withRouter } from 'react-router-dom';
import React from "react";
import PropTypes from "prop-types";

import HomePage from "../vues/HomePage.jsx";
import Projects from "../vues/Projects.jsx";
import Project from "../vues/Project.jsx";
import About from "../vues/About.jsx";
import Animation from '../utilities/Animation.js'


export default class Main extends React.Component {

	/*static propTypes = {
		location: React.PropTypes.object.isRequired
	}*/

	componentDidUpdate(prevProps) {
		//Animation.switchPage(function(){})
	}

    render() {   
        return(			
			<main>
				<Switch>
				  <Route exact path='/' render = {(props) =>(
				  	<HomePage page={"home"}/>
				  )}/>
				  <Route path='/project' component={Project}/>
				  <Route path='/projects' render = {(props) =>(
				  	<HomePage page={"projects"}/>
				  )}/>
				  <Route path='/about' component={About}/>
				</Switch>
			</main>
        );
    }
}
