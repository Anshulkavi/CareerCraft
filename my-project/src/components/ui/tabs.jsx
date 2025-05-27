// SimpleTabs.jsx

import React, { useState } from "react"

// Tab Components

export function Tabs({ defaultValue, onValueChange, children }) {
  const [active, setActive] = useState(defaultValue)

  const handleChange = (val) => {
    setActive(val)
    if (onValueChange) onValueChange(val)
  }

  // Clone children and inject active state where needed
  return React.Children.map(children, (child) => {
    if (child.type.displayName === "TabsList") {
      return React.cloneElement(child, { active, onChange: handleChange })
    }
    if (child.type.displayName === "TabsContent") {
      return child.props.value === active ? child : null
    }
    return child
  })
}

export function TabsList({ children, active, onChange }) {
  return (
    <div className="inline-flex h-10 items-center justify-center rounded-md bg-gray-200 p-1 text-gray-500">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, {
          isActive: child.props.value === active,
          onClick: () => onChange(child.props.value),
        })
      )}
    </div>
  )
}
TabsList.displayName = "TabsList"

export function TabsTrigger({ children, value, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center px-3 py-1.5 text-sm font-medium rounded-sm transition-all ${
        isActive
          ? "bg-white text-black shadow-sm"
          : "text-gray-500 hover:text-black"
      }`}
    >
      {children}
    </button>
  )
}
TabsTrigger.displayName = "TabsTrigger"

export function TabsContent({ children }) {
  return <div className="mt-2">{children}</div>
}
TabsContent.displayName = "TabsContent"
