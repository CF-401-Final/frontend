import React from 'react'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'



export default class VolumeSlider extends React.Component {
    constructor(props, context) {
      super(props, context)
      this.state = {
        volume: -1,
        handImages : ["hands1", "hands2", "hands3", "hands4", "hands5", "hands6"]
      }
    }
   
    handleOnChange = (value) => {
      
      this.props.handleSliderChange(value);
      this.setState({
        volume: value
      })
    }
    

    render() {
      let { volume } = this.state

      return (
        <div >
        
        <img src={this.state.volume === -1?  `./images/${this.state.handImages[0]}.jpg`:`./images/${this.state.handImages[this.state.volume]}.jpg`} alt="Hands of Five" height="142" width="142"/>

        <Slider
          className="slider"
          value={volume}
          min={0}
          max={5}
          step={1}
          orientation="horizontal"
          onChange={this.handleOnChange}
        />
        </div>
      )
    }
}

