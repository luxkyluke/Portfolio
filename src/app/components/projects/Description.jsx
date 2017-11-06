import React from "react";
//import Eye from 'svg-react-loader?name=Eye!../../../img/icons/eye_open.svg';

//var ExecutionEnvironment = require('react/lib/ExecutionEnvironment');
import Utility from './../../utilities/utility.js';


export default class Description extends React.Component {
    constructor(props) {
        super(props);
    
        /*this.state ={
            'ax' : '0',
            'ay' : '0',
            reset: true
        } ;
    
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleIn = this.handleIn.bind(this);
        this.handleOut = this.handleOut.bind(this);*/
    }

    /*
    handleMouseMove(e){
       
        const ax = -(this.center.x- e.pageX)/20;
        const ay = (this.center.y- e.pageY)/10;
        const reset = true;

        this.setState({ax, ay, reset});
    }

    handleIn(e){
        console.log("in")
        window.addEventListener('mousemove', this.handleMouseMove);
        //this.handleMouseMove(e);
    }

    handleOut(){
        console.log('out')
        const ax = 0;
        const ay = 0;
        const reset = false;

        this.setState({ax, ay, reset});
        window.removeEventListener('mousemove', this.handleMouseMove);
    }

    componentDidMount() { 
        this.domElem = document.querySelector('#project_'+this.props.id+' .desc');
        this.center = Utility.getCenter(this.domElem);
        console.log(this.center);
    }

    componentWillUnmount() {

        window.removeEventListener('mousemove', this.handleMouseMove);
    }*/

    render() {
        /*let myStyle = {};
        if (this.state.ax == 0 && this.state.ay == 0){
            myStyle = {
                "WebkitTransition": 'all 500ms ease-in-out',
                "transition": 'all 500ms ease-in-out'
            };
        }
        else{
            myStyle = {
                "transform": "rotateY("+this.state.ax+"deg) rotateX("+this.state.ay+"deg)",
                "WebkitTransform": "rotateY("+this.state.ax+"deg) rotateX("+this.state.ay+"deg)",
                "MozTransform": "rotateY("+this.state.ax+"deg) rotateX("+this.state.ay+"deg)"
            };
        } */
        const active = (this.props.isActive) ? " active" : "";
        return(
            <a onClick={this.props.click} >
                <div className={"desc"+active} >
                    <div className="clickableArea"></div>
                    <h3 className="desc__title">Project</h3>
                    <h2 className="desc__name">{this.props.name}</h2>
                    <h3 className="desc__title">Category</h3>
                    <h2 className="desc__category">{this.props.category}</h2>
                    <img className="desc__eye" src="../../../img/icons/eye_open.svg"/>
                </div>
            </a>
        );
    }
}
