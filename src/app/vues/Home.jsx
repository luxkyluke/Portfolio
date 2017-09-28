import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Banniere	from "../components/Home/Banniere.jsx"
import Scroll	from "../components/assets/Scroll.jsx"
import BurgerMenu	from "../components/assets/BurgerMenu.jsx"


export default class Home extends React.Component{
	constructor(props){
		super(props);
	}

	render(){	
		return(
			<div id="home" className="page"> 
		      	<Banniere/>
			</div>
		);
	}
}
