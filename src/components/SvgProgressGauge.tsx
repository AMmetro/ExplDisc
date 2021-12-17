import {useEffect, useState} from 'react'

/**
 * Arc for chart
 * https://www.fullstacklabs.co/blog/creating-an-svg-gauge-component-from-scratch
 */
type ArcProps = {
  radius: number
  stroke?: number
  percent?: number
  animate?: boolean
}

function Arc({radius, stroke = 1, percent = 100, animate = false}: ArcProps) {
  const strokeRadius = stroke / 2
  const normalizedRadius = radius - strokeRadius
  const circumference = normalizedRadius * 2 * Math.PI
  const arc = ((percent / 100) * circumference) / 2
  const [strokeDasharray, setStrokeDasharray] = useState(
    animate ? `0 ${circumference}` : `${arc} ${circumference}`
  )
  useEffect(() => {
    setStrokeDasharray(`${arc} ${circumference}`)
  }, [arc, circumference])

  return (
    <circle
      className="duration-500"
      transform={`rotate(180,${radius},${radius})`}
      stroke="currentColor"
      fill="transparent"
      strokeWidth={stroke}
      strokeDasharray={strokeDasharray}
      strokeLinecap="round"
      r={normalizedRadius}
      cx={radius}
      cy={radius}
    />
  )
}

type Props = {
  achieved: number
  pending?: number
  required: number

  axisStroke?: number
  progressStroke?: number
}

export function SvgProgressGauge({
  achieved,
  pending = 0,
  required,
  axisStroke = 2,
  progressStroke = 10,
}: Props) {
  const radius = 110

  const axisStrokeRadius = axisStroke / 2
  const progressStrokeRadius = progressStroke / 2
  const strokesRadiusDiff = progressStrokeRadius - axisStrokeRadius

  const svgHeight = radius + progressStroke
  const svgWidth = (radius + progressStrokeRadius) * 2

  const achievedPercent = Math.min((achieved / required) * 100, 100)
  const pendingPercent = Math.min(((achieved + pending) / required) * 100, 100)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={svgWidth}
      height={svgHeight}
      preserveAspectRatio="xMidYMid"
    >
      <g
        className="text-grey-5"
        transform={`translate(${strokesRadiusDiff},${strokesRadiusDiff})`}
      >
        <Arc stroke={axisStroke} radius={radius + axisStrokeRadius} />
      </g>

      {pending > 0 && (
        <g className="text-mango-background">
          <Arc
            stroke={progressStroke}
            radius={radius + progressStrokeRadius}
            percent={pendingPercent}
            animate
          />
        </g>
      )}

      {achieved > 0 && (
        <g className="text-apple">
          <Arc
            stroke={progressStroke}
            radius={radius + progressStrokeRadius}
            percent={achievedPercent}
            animate
          />
        </g>
      )}
    </svg>
  )
}
