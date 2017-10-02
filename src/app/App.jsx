import React from "react";

import Main	from "./components/Main.jsx"
import Header	from "./components/Header.jsx"
import Footer	from "./components/Footer.jsx"

export default class App extends React.Component {
    render() {   

        return(			
			<div>
				<Header />
				<Main/>
			</div>
        );
    }
}
