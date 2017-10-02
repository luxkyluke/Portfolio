import { Route, Switch } from 'react-router-dom';
import React from "react";

import HomePage from "../vues/HomePage.jsx";
import Projects from "../vues/Projects.jsx";
import Menu from "../vues/Menu.jsx";

export default class Main extends React.Component {

    render() {   
        return(			
			<main>
				<Switch>
				  <Route exact path='/' component={HomePage}/>
				  <Route path='/projects' component={Projects}/>
				  <Route path='/menu' component={Menu}/>
				</Switch>
			</main>
        );
    }
}
