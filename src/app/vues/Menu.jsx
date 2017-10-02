import React from "react";


export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target)
    }

    render() {
        const myClass = (this.props.isOpen) ? " open" : "";
        return(
            <nav id="menu" className={"menu"+myClass}>
                <ul className="menu__list">
                    <a href="/" onClick={this.handleClick.bind(this, "home")}>
                        <li className="menu__list__item">home</li>
                    </a>
                    <a onClick={this.handleClick.bind(this, "projects")}>
                        <li className="menu__list__item">projects</li>
                    </a>
                    <a onClick={this.handleClick.bind(this, "aboutme")}>
                        <li className="menu__list__item">about me</li>
                    </a>
                </ul>
            </nav>
        );
    }
}
