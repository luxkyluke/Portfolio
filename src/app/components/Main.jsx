import { Route, Switch, BrowserRouter } from 'react-router-dom';
import React from "react";
import PropTypes from "prop-types";

import HomePage from "../vues/HomePage.jsx";
import Home from "../vues/Home.jsx";
import Projects from "../vues/Projects.jsx";
import Project from "../vues/Project.jsx";
import About from "../vues/About.jsx";
import Animation from '../utilities/Animation.js'


export default class Main extends React.Component {

	componentDidMount() {
        localStorage.removeItem('lastProjectId');
	}

    render() {   
        return(			
			<main>
				<Switch>
				  <Route path='/' exact render = {(props) =>(
				  	<HomePage page={"home"}/>
				  )}/>
				  <Route path='/project/:id' component={Project}/>
				  <Route  path='/projects' render = {(props) =>(
				  	<HomePage page={"projects"}/>
				  )}/>
				  <Route path='/about' component={About}/>
				</Switch>
			</main> 	
        );
    }
}
