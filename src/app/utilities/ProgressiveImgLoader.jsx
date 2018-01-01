import React from 'react';
 
class ProgressiveImgLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      imageIsLoaded: false,
      style : {backgroundImage : this.props.blur}
    };
  }
 
  handleImageLoaded() {
    this.setState({ imageIsLoaded: true });
    console.log('img loaded');
  }

  componentWillReceiveProps(newProps){
    if(this.props != newProps){
      this.setState({imageIsLoaded : false})
    }
  }
 
  render() {
    const myClass = (this.state.imageIsLoaded) ? '' : ' hide ';
    return (
      <div className={'progressiveImgLoader'}>
        <img
          className={'progressiveImgLoader__image ' + myClass + this.props.className}
          src={this.props.src}
          onLoad={this.handleImageLoaded.bind(this)}
          />
        <img
          className={'progressiveImgLoader__blur ' + myClass + this.props.className}
          src={this.props.blur}
          />
      </div>
    );
  }
}
export default ProgressiveImgLoader;