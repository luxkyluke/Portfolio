import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Banniere	from "../components/Home/Banniere.jsx"


export default class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){	
		const myClass = (this.props.isActive) ? "page active" : "page not-active";
		return(
			<div id="home" className={myClass}> 
		      	<Banniere />
			</div>
		);
	}
}
