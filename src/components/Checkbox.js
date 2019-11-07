import React from "react";

const Checkbox = props => (
  <input type="checkbox" {...props}
  checked={props.chck}
  onClick={props.clicked}
  value={props.value}
   />
);

export default Checkbox;
