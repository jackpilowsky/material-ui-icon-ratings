# material-ui-icon-ratings

> A simple solution to displaying and selecting ratings

[![NPM](https://img.shields.io/npm/v/material-ui-icon-ratings.svg)](https://www.npmjs.com/package/material-ui-icon-ratings) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save material-ui-icon-ratings
```

## Usage

```jsx
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

```
## Properties

| Name           |Type         |Default     |Description
|----------------|-------------|------------|--------------------------------
| readOnly       | Boolean     | false      | Used for display purposes only
| max            | Number      | 5          | Number of icons to display
| iconColor      | String      | #E5C100    | The color of the icons
| iconStyles     | object      | {color: '#E5C100', width: '100%'} | Styles Applied to the icon element
| initialValue   | Number      | 0          | The rating initialy displayed
| enableToolTip  | Boolean     | true       | Whether to show a tooltip when the selection is made
| toolTipText    | String or Function    | (rating) => { return \`Selected Rating: ${rating}\` | Either a string or a function. If its a funciton, function receives rating param
|iconFull        | React.Node  | \<StarSharp /> | The icon used for the full star
|iconEmpty       | React.Node  | \<StarBorderSharp /> | The icon used for the empty star
|iconHalfFull    | React.Node  | \<StarHalfSharp /> | The icon use for half star. Half star only appears if the initialValue is a decimal. Selecting half is not supported. Any decimal from between numbers will display as a half star. 




## Events

|Name            |Return Params|Description
|----------------|-------------|--------------------------------
|onChange        | rating      | Fired when a selection is made. Returns selected rating

## Contributing

Please submit submit bug in the `Issues` tab and pull requests would be very welcome. 

## License

MIT © [jackpilowsky](https://github.com/jackpilowsky)
