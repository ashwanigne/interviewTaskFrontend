import React, { useEffect, useState } from "react";

const Checkbox = ({ size, name, handleClick, isChecked }) => {
  return (
    <input
      type="checkbox"
      id={size}
      name={name}
      onChange={handleClick}
      checked={isChecked}
    />
  );
};

export default Checkbox;
