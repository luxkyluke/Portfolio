import React from 'react';
 
class ProgressiveBGImgLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      imageIsLoaded: false,
      src: this.props.src,
      blur:this.props.blur,
      scale:this.props.scale
    };
  }
 
  handleImageLoaded() {
    this.setState({imageIsLoaded: true});
  }

  componentWillReceiveProps(newProps){
    if(this.props.src != newProps.src){
      this.setState({imageIsLoaded : false});
      this.setState({src : newProps.src});
      this.setState({blur : newProps.blur});
    }
    if(this.props.scale != newProps.scale){
        this.setState({scale:newProps.scale });
    }
  }
 
  render() {
    const myClass = (this.state.imageIsLoaded) ? '' : ' blur ';
    const style = {
      'backgroundImage' : (this.state.imageIsLoaded) ? `url(${this.state.src})` : `url(${this.state.blur})`,
      'transform': `scale(${this.state.scale})`
    }
    return (
      <div className={'progressiveBGImgLoader ' +  myClass + this.props.className} style={style}>
        <img
          className={'progressiveBGImgLoader__image'}
          src={this.state.src}
          onLoad={this.handleImageLoaded.bind(this)}
          />
      </div>
    );
  }
}
export default ProgressiveBGImgLoader;