import React from "react";
//import ProgressiveImage from "react-progressive-image-loading";
import ProgressiveImage from './../../utilities/ProgressiveImgLoader.jsx'

import Utility from './../../utilities/utility.js';

export default class ImgBloc extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            content : this.getContent(this.props.src)
        }
    }

    getContent(src){
        if(Utility.isVideo(src)){
            return (
                <div className="video__wrapper">
                    <iframe 
                        className="video" 
                        src={src}  
                        frameBorder="0"  
                        allowFullScreen/>
                </div>
            )
        }
        return(
            <ProgressiveImage
                src = {src}
                blur = {Utility.getBlurImg(src)}
                className = 'imgBloc__frame__img'
                />
            /*<img className="imgBloc__frame__img" src={src}/>
            <ProgressiveImage
                preview={Utility.getBlurImg(src)}
                src={src}
                render={(src, style) => <img className="imgBloc__frame__img" src={src} style={style} />}
            />*/
        );
    }

    componentWillReceiveProps(newProps){
        if(this.props.src !== newProps.src){
            this.setState({content:this.getContent(newProps.src)});
        }
    }

    render() {
        const myClass = (this.props.full) ? " full" : "";
        //console.log(this.state.content)
        return(
            <div className={'imgBloc'+myClass} >
                <div className="imgBloc__frame">
                    {this.state.content}
                </div>    
            </div>
        );
    }
}
