import { Route, Switch } from 'react-router-dom';
import React from "react";

import HomePage from "../vues/HomePage.jsx";
import Projects from "../vues/Projects.jsx";
import Project from "../vues/Project.jsx";


export default class Main extends React.Component {

    render() {   
        return(			
			<main>
				<Switch>
				  <Route exact path='/' render = {(props) =>(
				  	<HomePage page={"home"}/>
				  )}/>
				  <Route path='/project/' component={Project}/>
				  <Route path='/projects' render = {(props) =>(
				  	<HomePage page={"projects"}/>
				  )}/>
				  <Route path='/about' render = {(props) =>(
				  	<Projects isActive={true}/>
				  )}/>
				</Switch>
			</main>
        );
    }
}
