import React 	from "react";
import { BrowserRouter as Router,
         Link, IndexRedirect,  browserHistory } from "react-router";

import Home	from "./Home.jsx"
import Projects from "./Projects.jsx"


export default class HomePage extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			"home": true
		}


		this.handleScroll = this.handleScroll.bind(this);
		this.scrollUp = this.scrollUp.bind(this);
		this.scrollDown = this.scrollDown.bind(this);

	}

	handleScroll(e){
        const dir = e.deltaY/Math.abs(e.deltaY);
        //console.log(dir)
        if(dir > 0 && this.state.home){
	       	this.scrollDown();
        }
	}

	scrollDown(){
		this.setState({'home':false});
        window.removeEventListener('wheel', this.handleScroll);
	}

	scrollUp(){
		this.setState({
    		'home':true
    	});
        window.addEventListener('wheel', this.handleScroll);
	}

	componentDidMount() { 
        window.addEventListener('wheel', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('wheel', this.handleScroll);
    }

	render(){	
		const myStyle= (this.state.home) ? {} :  {'transform':'translateY(-100%)'};
		return(
			<div id="homePage" style={myStyle}>
				<Home isActive={this.state.home} clickProject={this.scrollDown}/>
			    <Projects isActive={(!this.state.home)} up={this.scrollUp}/>
		    </div>
		);
	}
}
