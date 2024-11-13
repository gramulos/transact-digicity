"use client";

import React, { useState } from "react";

type HamburgerProps = {
  onClick: () => void;
};

const Hamburger: React.FC<HamburgerProps> = (props) => {
  const [isOpened, setIsOpened] = useState(false);

  const toggleMenu = () => {
    setIsOpened(!isOpened);
    props.onClick();
  };

  // Base styles that remain constant
  const basePathStyles = {
    transition:
      "stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), stroke 600ms cubic-bezier(0.4, 0, 0.2, 1)",
    fill: "none",
    stroke: isOpened ? "black" : "white",
    strokeWidth: 6,
  };

  // Dynamic styles for each line
  const line1Styles = {
    ...basePathStyles,
    strokeDasharray: isOpened ? "90 207" : "60 207",
    strokeDashoffset: isOpened ? -134 : 0,
  };

  const line2Styles = {
    ...basePathStyles,
    strokeDasharray: isOpened ? "1 60" : "60 60",
    strokeDashoffset: isOpened ? -30 : 0,
  };

  const line3Styles = {
    ...basePathStyles,
    strokeDasharray: isOpened ? "90 207" : "60 207",
    strokeDashoffset: isOpened ? -134 : 0,
  };

  return (
    <button
      className="xl:hidden bg-transparent border-none cursor-pointer p-0 w-12 h-12 z-50"
      onClick={toggleMenu}
      aria-label="Main Menu"
      aria-expanded={isOpened}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <path
          style={line1Styles}
          d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
        />
        <path style={line2Styles} d="M 20,50 H 80" />
        <path
          style={line3Styles}
          d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
        />
      </svg>
    </button>
  );
};

export default Hamburger;
