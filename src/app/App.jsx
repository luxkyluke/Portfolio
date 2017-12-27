import React from "react";
import PropTypes from "prop-types";

import Main	from "./components/Main.jsx"
import Header	from "./components/Header.jsx"
import Footer	from "./components/Footer.jsx"
import Animation from './utilities/Animation.js'


export default class App extends React.Component {
	static contextTypes = {
		router: PropTypes.object
	}

	constructor(props, context){
		super(props, context);
	}

	componentWillMount() {
		this.unlisten = this.context.router.history.listen((location, action) => {
			const page = document.querySelector('.page');
			if(action == "POP"){
				page.classList.add('hide');
				Animation.switchPage(function(){
					page.classList.remove('hide');
	    		}.bind(this));
			}
		});
	}

	componentWillUnmount() {

	  this.unlisten();
	}

    render() {   
        return(			
			<div>
				<Header>
					<Main />
				</Header>
			</div>
        );
    }
}
