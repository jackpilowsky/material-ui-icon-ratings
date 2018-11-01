import React from "react";

function Icon(props){
  const iconFull = React.cloneElement(props.iconFull, {'style': props.iconStyles});
  const iconEmpty = React.cloneElement(props.iconEmpty, {'style': props.iconStyles});
  const iconHalfFull = React.cloneElement(props.iconHalfFull, {'style': props.iconStyles});
  const {hovered, selected, position} = props;
  // for hovered
  if(!props.readOnly && hovered){
    if(position <= hovered){
      return iconFull;
    }else{
      return iconEmpty;
    }
  }
  // for readonly and selected
  if(selected){
    if(selected > Math.floor(position) && selected <= Math.ceil(position)){
      return iconHalfFull;
    }else if(position <= selected){
      return iconFull; 
    }else{
      return iconEmpty;
    }
  }
  return iconEmpty;
}

export default Icon;