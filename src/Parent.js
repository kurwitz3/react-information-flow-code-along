import React, { Children, Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      ChildrenColor: '#FFF'
    }
  }
  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
      childrenColor: newChildColor
    })
  }


  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.ChildrenColor} handleColorChange={this.changeColor}/>
        <Child color={this.state.ChildrenColor} handleColorChange={this.changeColor}/>
      </div>
    )
  }
}

export default Parent
