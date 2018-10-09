import React from "react";
//import Scroll from 'react-scroll'; // Imports all Mixins
 

import ProgressiveImage from "./../../utilities/ProgressiveBGImgLoader.jsx";
import Button   from "./../assets/Button.jsx";
import ScrollArrow   from "./../assets/Scroll.jsx";
import Animation   from "./../../utilities/Animation.js";
import Utility   from "./../../utilities/utility.js";

export default class HeaderProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: "",
            type : this.props.type ,
            title : this.props.title ,
            desc : this.props.desc ,
            link : this.props.link ,
            img : this.props.img ,
            blur : this.props.blur ,
            color : this.props.color,
            scale : this.props.scale,
            scrollClick  : this.props.scrollClick
        }
    }

    componentWillReceiveProps(newProps){
        if(this.state.img !== newProps.img){
            this.setState({type : newProps.type});
            this.setState({title : newProps.title});
            this.setState({desc : newProps.desc});
            this.setState({link : newProps.link});
            this.setState({img : newProps.img});
            this.setState({blur : newProps.blur});
            this.setState({color : newProps.color});
            this.setState({scale : 1.1});
            return;
        }
        if(this.state.scale !== newProps.scale){
            this.setState({scale:newProps.scale})
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        //console.log('shouldComponentUpdate')
        return this.state.title = nextProps.title
    }

    componentDidMount(){
        setTimeout(function(){
            this.setState({active:' active'})
        }.bind(this), 750);
    }

    render() {
        /*console.log(this.state.title)
        console.log(this.state.img)*/
        //<img className="header__right__img" src={this.img} />
        const backgroundStyle = {'backgroundImage' : 'url('+this.state.img+')',
            'transform':'scale('+this.state.scale+')'
        }
        const style = {
            'transform':'scale('+this.state.scale+')'
        }
        const color = {color : this.state.color};
        return(
            <div className="header_project">
                <div className={"header_project__left" + this.state.active}>
                    <div className="header_project__left__wrapper">
                        <div className="header_project__left__wrapper__text">
                            <h3 className="header_project__left__wrapper__text__type" style={color}>{this.state.type}</h3>
                            <h2 className="header_project__left__wrapper__text__title">{this.state.title}</h2>
                            <p className="header_project__left__wrapper__text__desc" dangerouslySetInnerHTML={{__html : this.state.desc}}/>
                        </div>
                        <Button 
                            label="see website" 
                            link={this.state.link} 
                            target="_blank"
                            color = {this.state.color}
                            hide = {!this.state.link}/>
                    </div>
                </div>
                <ProgressiveImage
                    blur={Utility.getBlurImg(this.state.img)}
                    src={this.state.img}
                    scale={this.state.scale}
                    className="header_project__right" 
                />
                <ScrollArrow click={this.state.scrollClick} black={true}/>
                <ScrollArrow click={this.state.scrollClick} black={false}/>
            </div>
        );
    }
}
