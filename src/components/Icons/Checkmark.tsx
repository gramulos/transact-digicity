import React from "react";

interface CheckmarkProps {
  className?: string;
  size?: number;
}

const Checkmark: React.FC<CheckmarkProps> = ({ className, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="presentation"
  >
    <path
      fill="currentColor"
      d="M10 20.5A10 10 0 1 1 15.3 2l-.7 1.1a8.7 8.7 0 1 0 3.8 5.1l1.3-.3A10 10 0 0 1 10 20.5Z"
    />
    <path
      fill="currentColor"
      d="M10 13.3 5.3 8.6l1-.9 3.7 3.7L20.3 1.2l1 .9L10 13.3Z"
    />
  </svg>
);

export default Checkmark;
