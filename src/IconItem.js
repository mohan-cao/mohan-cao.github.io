import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const IconItem = ({ title, icon, custom=false }) => {
  return (<div className="even-columns-child">
    <div className="interest-icon">
      { custom ? icon : <FontAwesomeIcon icon={icon} size='2x' /> }
    </div>
    <p><em>{title}</em></p>
  </div>);
};
