import React from "react";

const ArrowIcon = () => {
  return (
    <>
      <svg
        width="full"
        height="full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10" y1="50" x2="70" y2="50" stroke="currentColor" stroke-width="5" />
        <line x1="50" y1="30" x2="70" y2="50" stroke="currentColor" stroke-width="5" />
        <line x1="50" y1="70" x2="70" y2="50" stroke="currentColor" stroke-width="5" />
      </svg>
    </>
  );
};

export default ArrowIcon;
