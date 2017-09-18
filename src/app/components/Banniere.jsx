import React from "react";
import { BrowserRouter as Router,
         Link } from "react-router";

import Utility 	from "../utilities/utility.js";
import Button	from "./assets/Button.jsx";

export default class Banniere extends React.Component {

	constructor(props){
		super(props);
		document.addEventListener("mousemove", function(event){
			const width = window.innerWidth;
			const height = window.innerHeight;
			const x = Math.floor((event.clientX-(width/2))/100);
			const y = Math.floor((event.clientY+150-(height/2))/75);
			document.querySelector(".title h1")
					.style.textShadow = (x) + "px " + (y) + "px #bd00f6"
		});
	
		this.handleEnterBtnClick.bind(this);
	}

	handleEnterBtnClick(){

	}

	handleAboutBtnClick(){

	}

    render() { 
    	return(  
	    	<div id="banniere" className="center_center" onMouseMove={this.handleMouseMove}>
				<div className="title">
					<h1>Antoine Demiere</h1>
				</div>
				<div id="rubriques">
		      		<Button label = "Projects"
		      				property = ""
		      				callback = {this.handleEnterBtnClick}
		      		/>
		      		<Button label = "About Me"
		      				property = ""
		      				callback = {this.handleEnterBtnClick}
		      		/>
		      	</div>
			</div>
    	);
	}
}
