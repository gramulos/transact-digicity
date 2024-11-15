"use client";
import React, { useState } from "react";

interface BackdropProps {
  className?: string;
  isVisible?: boolean;
  children?: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({
  className = "",
  isVisible,
  children,
}) => {
  return (
    <div
      className={`
        fixed top-0 left-0 inset-0 z-30 bg-black/50 
        flex items-center justify-center 
        transition-opacity duration-300 
        ${className}
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div className="relative z-40">{children}</div>
    </div>
  );
};

export const useBackdrop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const show = () => setIsVisible(true);
  const hide = () => setIsVisible(false);

  const BackdropComponent = isVisible ? Backdrop : null;

  return {
    show,
    hide,
    BackdropComponent,
  };
};

export default Backdrop;
