import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Header 	from "../components/Header.jsx";
import Footer 	from "../components/Footer.jsx";
import Banniere	from "../components/Banniere.jsx"


export default class Home extends React.Component{
	constructor(props){
		super(props);
	}

/* */

	render(){	
		return(
			<div id="home" className="page"> 
		        <Header/>
		      	<Banniere/>
		      	
		        <Footer/>
			</div>
		);
	}
}
