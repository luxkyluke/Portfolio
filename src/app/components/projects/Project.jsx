import React from "react";
require ('./../../utilities/constantes.js');

import Description from "./Description.jsx"

import ColorThief from './../../utilities/color-thief.js';


export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            'mainColorImg' : 'rgba(0, 0, 0, 0)'
        } ;

        this.handleClick = this.handleClick.bind(this);
        this.handleImgLoaded = this.handleImgLoaded.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleClick(){

    }

    handleImgLoaded(){
        //getMainColors
        let img = new Image();
        img.src=this.props.cover;
        var colorThief = new ColorThief();
        var color = colorThief.getColor(img);
        const rgba = 'rgba('+color[0]+', '+color[1]+', '+color[2]+', 0.4)';
        console.log(rgba);
        this.setState({'mainColorImg': rgba});
    }

    handleImgError(){
        console.err("Error loading img : "+this.props.cover);
    }

    render() {      
        const filterStyle = {backgroundColor: this.state.mainColorImg}
        const myClass = (this.props.id%2 === 0) ? "project even" : "project odd";
         return(
            <div className={myClass}>
                <div className="project__wrapper">
                    <a onClick={this.handleClick} >
                        <img 
                            className="project__img" 
                            src={this.props.cover}
                            onLoad={this.handleImgLoaded}
                            onError={this.handleImgError}
                            />
                        <div className="project__filter" style={filterStyle}></div>
                    </a>
                    <Description name ={this.props.name} category={this.props.category}/> 
                </div>
            </div>
           
        );
    }
}
