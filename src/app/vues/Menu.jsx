import React from "react";
import { Link } from 'react-router-dom';


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, e) {
       //e.preventDefault();
        this.props.close();
    }

    render() {
        const myClass = (this.props.isOpen) ? " open" : "";
        return(
            <nav id="menu" className={"menu"+myClass}>
                <ul className="menu__list">
                    
                    <li className="menu__list__item">
                        <Link to="/" onClick={this.handleClick.bind(this, "home")}>home</Link>
                    </li>

                    <li className="menu__list__item">
                        <Link to="/projects" onClick={this.handleClick.bind(this, "projects")}>projects</Link>
                    </li>
                    <li className="menu__list__item">
                        <Link to="/about" onClick={this.handleClick.bind(this, "aboutme")}>about me</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}
