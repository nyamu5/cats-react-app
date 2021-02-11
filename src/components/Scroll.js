import React from 'react';

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '1px solid black',
        height: '800px',
        padding: '5px 0px',
        margin: '0px 40px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
