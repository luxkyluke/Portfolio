import React from "react";

import ImgBloc  from "./ImgBloc.jsx";

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        const listImg = this.getListImg(this.props.imgs)

        this.state = {
            listImg : listImg
        }
    }

    getListImg(imgs){
        return imgs.map((img, i) => 
            <ImgBloc full={img.full} src={img.src} key={i}/>
        );
    }

    componentWillReceiveProps(newProps){
        if(this.props.imgs !== newProps.imgs)
            this.setState({listImg : this.getListImg(newProps.imgs)})
    }

    render() {
        return(
            <div className="images">
                {this.state.listImg}
            </div>
        );
    }
}
