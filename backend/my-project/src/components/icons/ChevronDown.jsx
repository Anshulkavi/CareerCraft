import React from 'react';

export function ChevronDown(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-chevron-down"
    >
      <polyline points="6 8 10 12 14 8" />
    </svg>
  );
}
