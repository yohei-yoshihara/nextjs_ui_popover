"use client";

import React, { useState, useRef, ReactNode } from "react";
import { useOutsideClick } from "../lib/use-outside-click";

type Props = {
  children: ReactNode;
  content: ReactNode;
};

export default function Popover({ children, content }: Props) {
  const [isVisible, setIsVisible] = useState(false); // Manages the visibility state of the popover
  const popoverRef = useRef(null); // Reference to the popover element
  const triggerRef = useRef(null); // Reference to the button element that triggers the popover

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const ref = useOutsideClick(() => {
    console.log("outside click");
    setIsVisible(false); // Close the popover if clicked outside
  });

  return (
    <div className="relative inline-block" ref={ref}>
      <button
        type="button"
        ref={triggerRef}
        onClick={toggleVisibility}
        className="bg-blue-500 text-white p-2 cursor-pointer rounded-md"
        aria-haspopup="true"
        aria-expanded={isVisible}
        aria-controls="popover-content">
        {children}
      </button>
      {isVisible && (
        <div
          id="popover-content"
          ref={popoverRef}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border-[1px] border-solid border-gray-300 shadow-md rounded-md p-4 z-10 whitespace-nowrap"
          role="dialog"
          aria-modal="true">
          {content}
        </div>
      )}
    </div>
  );
}
