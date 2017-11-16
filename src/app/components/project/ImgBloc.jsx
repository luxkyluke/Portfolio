import React from "react";
import ProgressiveImage from "react-progressive-image-loading";

import Utility from './../../utilities/utility.js';

export default class ImgBloc extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const myClass = (this.props.full) ? " full" : "";
        return(
            <div className={'imgBloc'+myClass} >
                <div className="imgBloc__frame">
                    <ProgressiveImage
                        preview={Utility.getBlurImg(this.props.src)}
                        src={this.props.src}
                        render={(src, style) => <img className="imgBloc__frame__img" src={src} style={style} />}
                    />
{/*                    <img className="imgBloc__frame__img" src={this.props.src} />
*/}                </div>    
            </div>
        );
    }
}
