import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Header 	from "../components/Header.js";
import Footer 	from "../components/Footer.js";
export default class Home extends React.Component{
	constructor(props){
		super(props);
	}

/* */

	render(){	
		return(
			<div id="home" className="page"> 
		        <Header/>
		      		<div className="middle">
					<div className="title">
						<h1>Antoine	Demiere</h1>
					</div>
				</div>
		        <Footer/>
			</div>
		);
	}
}
