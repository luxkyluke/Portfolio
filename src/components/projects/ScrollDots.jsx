import React from "react";
import ScrollDot from "./ScrollDot.jsx"
require ('./../../utilities/constantes.js')


export default class ScrollDots extends React.Component {
    constructor(props) {
        super(props);

        this.projects = new Array();
        for(let i = 0; i < this.props.nb ; i++){
            this.projects.push(i);
        }
        this.handleClick = this.handleClick.bind(this);
    }


    handleClick(id) {
        this.props.click(id);
    }

    

    render() {
        return(
            <div className="scrollDots">
                <ScrollDot 
                    isCurrent={this.props.currentId === 0}
                    click={this.handleClick} 
                    id={0}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 1}
                    click={this.handleClick} 
                    id={1}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 2}
                    click={this.handleClick} 
                    id={2}/>
                <ScrollDot 
                    isCurrent={this.props.currentId === 3}
                    click={this.handleClick} 
                    id={3}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 4}
                    click={this.handleClick} 
                    id={4}/> 
                <ScrollDot 
                    isCurrent={this.props.currentId === 5}
                    click={this.handleClick} 
                    id={5}/> 
            </div>
        );
    }
}
