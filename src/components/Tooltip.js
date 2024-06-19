import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, isVisible, position }) => {
  if (!isVisible) return null;

  const style = {
    top: position.y,
    left: position.x,
  };

  return (
    <div className="tooltip" style={style}>
      {text}
    </div>
  );
};

export default Tooltip;
