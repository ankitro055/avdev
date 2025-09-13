 import React from "react"

export function Card({ children, className = "", ...props }) {
  return (
    <div 
      className={`rounded-xl border border-[#C6A7F2]/30 bg-white p-4 shadow-md hover:shadow-lg transition-shadow ${className}`}
      style={{
        '--tw-shadow-color': 'rgba(178, 114, 242, 0.2)',
        '--tw-shadow': '0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color)',
        '--tw-shadow-hover': '0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color)'
      }}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "", ...props }) {
  return (
    <div className={`mb-4 border-b border-[#C6A7F2]/20 pb-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = "", ...props }) {
  return (
    <h3 className={`text-lg font-semibold text-[#361259] ${className}`} {...props}>
      {children}
    </h3>
  )
}

export function CardDescription({ children, className = "", ...props }) {
  return (
    <p className={`text-sm text-[#6B4A8C] ${className}`} {...props}>
      {children}
    </p>
  )
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`mt-2 text-[#6B4A8C] ${className}`} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ children, className = "", ...props }) {
  return (
    <div className={`mt-4 pt-2 border-t border-[#C6A7F2]/20 text-[#B272F2] ${className}`} {...props}>
      {children}
    </div>
  )
}