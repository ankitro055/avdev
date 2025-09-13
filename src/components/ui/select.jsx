 'use client'

import React, { useState } from "react"

// Wrapper component for Select
export function Select({ value, onValueChange, children }) {
  return (
    <div className="relative w-full">
      {React.Children.map(children, child =>
        React.isValidElement(child)
          ? React.cloneElement(child, { value, onValueChange })
          : child
      )}
    </div>
  )
}

// Button to open select menu
export function SelectTrigger({ children, className = "", onClick }) {
  return (
    <button
      type="button"
      className={`w-full rounded border px-4 py-2 text-left text-sm bg-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

// Placeholder or selected value
export function SelectValue({ value, placeholder }) {
  return (
    <span className="text-gray-800">
      {value || <span className="text-gray-500">{placeholder}</span>}
    </span>
  )
}

// Dropdown menu
export function SelectContent({ children, open }) {
  if (!open) return null
  return (
    <div className="absolute z-10 mt-1 w-full rounded border bg-white shadow">
      {children}
    </div>
  )
}

// Clickable item in dropdown
export function SelectItem({ value, children, onValueChange }) {
  return (
    <div
      className="cursor-pointer px-4 py-2 hover:bg-gray-100"
      onClick={() => onValueChange(value)}
    >
      {children}
    </div>
  )
}
