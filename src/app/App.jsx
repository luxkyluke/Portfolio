import React from "react";
import PropTypes from "prop-types";

import Main	from "./components/Main.jsx"
import Header	from "./components/Header.jsx"
import Footer	from "./components/Footer.jsx"

export default class App extends React.Component {
	constructor(props, context){
		super(props, context);
	}

	componentWillMount() {
		/*this.unlisten = this.context.router.history.listen((location, action) => {
		  console.log("on route change");
		});*/
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
