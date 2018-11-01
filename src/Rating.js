import React, { Component} from 'react';
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import StarSharp from '@material-ui/icons/StarSharp'; // full
import StarBorderSharp from '@material-ui/icons/StarBorderSharp'; // empty
import StarHalfSharp from '@material-ui/icons/StarHalfSharp'; // half
import IconWrapper from './IconWrapper';


class Rating extends Component{
  constructor(props){
    super(props);
    this.state = {
      selected: this.props.initialValue,
      hovered: 0,
      openTooltip: 0
    }
    this.starMouseEnter = this.starMouseEnter.bind(this);
    this.starMouseLeave = this.starMouseLeave.bind(this);
    this.selectIcon = this.selectIcon.bind(this);
  }
  starMouseEnter(position){
    this.setState({
      hovered: position
    });
  };
  starMouseLeave(){
    this.setState({
      hovered: 0
    });
  }
  selectIcon(rating){
    if(this.props.enableToolTip){
      this.setState({
        openTooltip: rating,
        selected: rating
      });
    }
    if(this.props.onChange){
      this.props.onChange(rating)
    }
  }
  handleTooltipClose = () => {
    this.setState({ openTooltip: 0 });
  };
  createIconsArray(){
    var arr = [];
    for(var i = 1; i <= this.props.max; i++){
      arr.push(i);
    }
    return arr;
  }
  render(){
    const {classes} = this.props; 
    const iconsArray = this.createIconsArray();
    const gridItemSize = Math.floor(12/iconsArray.length); // 12 is the default size of the grid
    const offSetSize = (12 % iconsArray.length)/2;
    return(
      <Grid container>
        {(offSetSize > 0) &&
          <Grid item xs={offSetSize} />
        }
        { iconsArray.map((position) => {
          return (
            <Grid 
              item
              xs={gridItemSize}
              onMouseEnter={this.starMouseEnter.bind(this, position)} 
              onMouseLeave={this.starMouseLeave}
              onClick={this.selectIcon.bind(this, position)}
              name={position}
              key={position}>
              <IconWrapper 
                handleTooltipClose={this.handleTooltipClose}
                toolTipText={this.props.toolTipText}
                toolTipOpen={this.state.openTooltip === position}
                iconFull={this.props.iconFull}
                iconEmpty={this.props.iconEmpty}
                iconHalfFull= {this.props.iconHalfFull}
                hovered={this.state.hovered}
                selected={this.state.selected}
                position={position}
                readOnly={this.props.readOnly}
                iconStyles={this.props.iconStyles}
                />
            </Grid>
          )}) 
        }
        <Grid item xs={1} />
      </Grid>
    )
  }
}
Rating.defaultProps = {
  readOnly: false,
  max: 5,
  iconStyles: {color: '#E5C100', width: '100%'},
  initialValue: 0,
  enableToolTip: true, 
  toolTipText: (rating) => { return `Selected Rating: ${rating}`},
  iconFull: <StarSharp />,
  iconEmpty: <StarBorderSharp />,
  iconHalfFull: <StarHalfSharp />,
}
Rating.propTypes = {
  readOnly: PropTypes.bool,
  iconStyles: PropTypes.object,
  max: PropTypes.number, 
  onChange: PropTypes.func,
  iconColor: PropTypes.string,
  initialValue: PropTypes.number,
  enableToolTip: PropTypes.bool,
  toolTipText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ]),
  iconFull: PropTypes.node,
  iconEmpty: PropTypes.node,
  iconHalfFull: PropTypes.node
};

export default Rating;