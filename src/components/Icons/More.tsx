import React from "react";

interface MoreProps {
  className?: string;
  size?: number;
}

const More: React.FC<MoreProps> = ({ className, size = 31 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33 49"
    width={size}
    height={size * 1.58}
    fill="none"
    role="presentation"
  >
    <path
      fill="#0067DA"
      stroke="#fff"
      strokeMiterlimit="10"
      className={className}
      d="M11.1 27.1h10.4L16.3 35l-5.2-7.9Z"
    />
    <path
      stroke="#fff"
      strokeMiterlimit="10"
      d="M16.3 27.1V.6M16.3 45.5a15.7 15.7 0 1 0 0-31.4 15.7 15.7 0 0 0 0 31.4Z"
    />
  </svg>
);

export default More;
