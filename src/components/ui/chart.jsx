import React from "react"

export function ChartContainer({ children, className = "", config = {} }) {
  return <div className={className}>{children}</div>
}

export function ChartLegend({ content }) {
  return <div className="mt-4">{content}</div>
}

export function ChartLegendContent() {
  return <p className="text-sm text-gray-500">Legend</p>
}

export function ChartTooltip({ content }) {
  return <>{content}</>
}

export function ChartTooltipContent({ labelFormatter, indicator }) {
  return (
    <div className="p-2 bg-white rounded shadow">
      <p className="text-sm font-medium">{labelFormatter("2024-06-30")}</p>
      <p className="text-xs text-gray-500">({indicator})</p>
    </div>
  )
}

// Optional type for config
export const ChartConfig = {}
