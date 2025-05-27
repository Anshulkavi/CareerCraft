// SimpleLabel.jsx

import React from "react"

export function Label({ className = "", children, ...props }) {
  return (
    <label
      className={`text-sm font-medium leading-none disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </label>
  )
}
