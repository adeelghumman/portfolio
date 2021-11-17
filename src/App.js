import React from 'react'
import Header from './Components/Header'
import Slider from './Components/Slider'
import BelowSlider from './Components/BelowSlider'
import BelowSlider1 from './Components/BelowSlider1'
import BelowSlider2 from './Components/BelowSlider2'
import Footor from './Components/Footor'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Slider></Slider>
        <BelowSlider></BelowSlider>
        <BelowSlider1></BelowSlider1>
        <img id="bs2" src="images/main2.jpg" alt="image" />
        <BelowSlider2></BelowSlider2>
        <Footor></Footor>

      </div>
    )
  }

}

export default App
