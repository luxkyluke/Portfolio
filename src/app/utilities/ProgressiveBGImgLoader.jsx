import React from 'react';
 
class ProgressiveBGImgLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      imageIsLoaded: false,
      src: this.props.src,
      blur:this.props.blur,
      style : {backgroundImage : `url(${this.props.blur})`}
    };
  }
 
  handleImageLoaded() {
    this.setState({imageIsLoaded: true});
    this.setState({
      style : {backgroundImage : `url(${this.props.src})`}
    });
  }

  componentWillReceiveProps(newProps){
    if(this.props.src != newProps.src){
      this.setState({imageIsLoaded : false});
      this.setState({src : newProps.src});
      this.setState({blur : newProps.blur});
      this.setState({
        style : {backgroundImage : `url(${newProps.blur})`}
      });
    }
  }
 
  render() {
    const myClass = (this.state.imageIsLoaded) ? '' : ' blur ';
    return (
      <div className={'progressiveBGImgLoader ' +  myClass + this.props.className} style={this.state.style}>
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