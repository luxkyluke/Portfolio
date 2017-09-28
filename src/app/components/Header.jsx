import React from "react";

import Logo	from "../components/assets/Logo.jsx"
import BurgerMenu	from "../components/assets/BurgerMenu.jsx"

export default class Header extends React.Component{
	render(){
		return(
			<header>
				<Logo/>
		      	<BurgerMenu/>
			</header>
		);
	}
}
