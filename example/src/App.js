import React, { Component } from 'react'
import Rating from 'material-ui-icon-ratings'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      rating: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(rating){
    this.setState({
      rating
    })
  }
  render () {
    return (
      <div>
        <Rating 
          onChange={this.handleChange}
          iconStyles={{color: 'red', width: '100%'}}
          toolTipText={(rating) => { return `You have selected ${rating}`}}
          />
      </div>
    )
  }
}
