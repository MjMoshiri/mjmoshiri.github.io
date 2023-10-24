import React from 'react';
import './index.css';
function Container({ children }) {
  return (
    <div className="container">
      {children.map((child, index) => (
        <div key={index}>
          <div className="separator"></div>
          {child}
        </div>
      ))}
    </div>
  );
}

export default Container;
