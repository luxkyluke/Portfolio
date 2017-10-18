import React from "react";

import BurgerMenu	from "../components/assets/BurgerMenu.jsx"
import Menu	from "../vues/Menu.jsx"

export default class Header extends React.Component{
	constructor(props){
		super(props);

		this.state ={
			"open": false
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(){
		if(this.state.open)
			this.closeMenu();
		else
			this.openMenu();
	}

	openMenu(){
		document.getElementsByClassName("page")[0].classList.add('hide');
		this.setState ({
			'open' : !this.state.open
		});
	}	

	closeMenu(){
		document.getElementsByClassName("page")[0].classList.remove('hide');
		const menu = document.getElementById('menu');
		menu.style.opacity = 0;
		/*menu.style.transform = 'translateX(+100%)';
		menu.style.border = '0px'*/

		setTimeout(function(){
			this.setState ({
				'open' : !this.state.open
			});
			menu.style="";
		}.bind(this), 400);
	}

	render(){
		const myClass = (this.state.open) ? "active" : "";
		return(
			<header className={myClass}>
		      	<Menu isOpen={this.state.open} close={this.handleClick}/>
		      	<BurgerMenu isOpen={this.state.open} click={this.handleClick}/>
			</header>
		);
	}
}
