import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Header 	from "../components/Header.jsx";
import Footer 	from "../components/Footer.jsx";
import Banniere	from "../components/Banniere.jsx"
import Scroll	from "../components/assets/Scroll.jsx"
import BurgerMenu	from "../components/assets/BurgerMenu.jsx"


export default class Projects extends React.Component{
	constructor(props){
		super(props);
	}

/* */

	render(){	
		return(
			<div id="projects" className="page"> 
		        <Header/>
		      	<Banniere/>
		      	<Scroll black={false}/>
		      	<BurgerMenu/>
		        <Footer/>
			</div>
		);
	}
}
