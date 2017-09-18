import React from "react";
import { BrowserRouter as Router,
         Link } from "react-router";



export default class Footer extends React.Component {
	  
	handleAboutBtnClick(){	
		window.scrollTo(0, document.getElementById("app").scrollTop);
		this.refs.about.open();
	}
	
	handleContactBtnClick(){
		this.refs.contact.open();
	}
   
    render() {   

        return(			null
        );
    }
}
