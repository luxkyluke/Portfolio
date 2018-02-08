import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";


export default class Menu extends React.Component {
    static contextTypes = {
        router: PropTypes.object
    }
    
    constructor(props, context) {
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            open : this.props.isOpen,
            scale : "",
            move: ""
        }
    }

    handleClick(id, e) {
       //e.preventDefault();
        this.context.router.history.push("/"+id);

        this.props.close();
    }

    componentWillReceiveProps(newProps){
        if(newProps.isOpen){
            this.setState({scale : " scale"});
            setTimeout(function(){
                this.setState({move : " move", open: true});
            }.bind(this), 0);
        }else{
            this.setState({scale : ""});
            setTimeout(function(){
                this.setState({move : "", open: false});
            }.bind(this), 0);
        }
    }

    render() {
        const myClass = (this.state.open) ? " open" : "";
        return(
            <nav id="menu" className={"menu"+myClass}>
                <ul className={"menu__list" + this.state.scale + this.state.move}>
                    <li className="menu__list__item">
                        <a  onClick={this.handleClick.bind(this, "")}>home</a>
                    </li>
                    <li className="menu__list__item">
                        <a  onClick={this.handleClick.bind(this, "work")}>work</a>
                    </li>
                    <li className="menu__list__item">
                        <a onClick={this.handleClick.bind(this, "about")}>about me</a>
                    </li>
                </ul>   
                <div className="menu__copyright">
                    <span className="menu__copyright__rights">All rights reserved</span> &copy; Antoine DEMIERE
                </div>
            </nav>
        );
    }
}
