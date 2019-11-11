import React from "react";

const Checkbox = props => (
  <input type="checkbox" {...props}
  key={props.id}
  name={props.index}
  checked={props.chck}
  onClick={props.clicked}
  value={props.value}
   />
);

export default Checkbox;
