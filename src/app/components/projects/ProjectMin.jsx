import React from "react";
require ('./../../utilities/constantes.js');

import Description from "./Description.jsx"

import ColorThief from './../../utilities/color-thief.js';


export default class ProjectMin extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            'mainColorImg' : 'rgba(0, 0, 0, 0)',
            'ax' : '0',
            'ay' : '0'
        } ;

        this.handleClick = this.handleClick.bind(this);
        this.handleImgLoaded = this.handleImgLoaded.bind(this);
        //document.documentElement.removeEventListener('scroll', this.handleScroll);
    }

    handleClick(){

    }

    

    handleImgLoaded(){
        //getMainColors
        /*let img = new Image();
        img.src = this.props.cover;
        var colorThief = new ColorThief();
        var color = colorThief.getColor(img);
        const rgba = 'rgba('+color[0]+', '+color[1]+', '+color[2]+', 0.4)';
       // console.log(rgba);
        this.setState({'mainColorImg': rgba});*/
    }

    handleImgError(){
        console.err("Error loading img : "+this.props.cover);
    }


    render() {      
        const filterStyle = {backgroundColor: this.state.mainColorImg}
        
        const myClass = (this.props.id%2 === 0) ? "project even" : "project odd";
        const active = (this.props.isActive) ? " active" : "";

        return(
            <div className={myClass+active} id={"project_"+this.props.id}>
                <a onClick={this.props.click} >
                    <div className='project__image' >
                        <img    className={"project__image__img"+active} 
                                src={'./data/'+this.props.name+'/background.min.jpg'}
                                onLoad={this.handleImgLoaded}
                                onError={this.handleImgError}
                        />
                    </div>
                </a>
                <Description    name ={this.props.title} 
                                category={this.props.category} 
                                click={this.props.click}
                                isActive = {this.props.isActive}
                                id={this.props.id}
                /> 
            </div>
           
        );
    }
}
