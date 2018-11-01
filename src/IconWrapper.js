import React from "react";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from './Icon';

function IconWrapper(props){
  const {toolTipText, handleTooltipClose} = props; 
  const title = (typeof toolTipText === 'function' ? toolTipText(props.position) : toolTipText );
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true,
          }}
          onClose={handleTooltipClose}
          open={props.toolTipOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={title}
        >
          <Icon
            iconFull={props.iconFull}
            iconEmpty={props.iconEmpty}
            iconHalfFull={props.iconHalfFull}
            hovered={props.hovered}
            selected={props.selected}
            position={props.position}
            readOnly={props.readOnly}
            iconStyles={props.iconStyles}
            />
        </Tooltip>
      </div>
    </ClickAwayListener>
  )
}

export default IconWrapper;