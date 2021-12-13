import * as React from 'react'

type SelectedArrowProps = React.SVGProps<SVGSVGElement> & {
  id: string
}

function SvgSelectedTabArrow(props: SelectedArrowProps) {
  const maskId = 'selected-tab-arrow_svg__mask-id__' + props.id
  const filterId = 'selected-tab-arrow_svg__filter-id__' + props.id

  return (
    <svg
      width="50"
      height="29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter={`url(#${filterId})`}>
        <mask
          id={maskId}
          style={{
            maskType: 'alpha',
          }}
          maskUnits="userSpaceOnUse"
          x={10}
          y={-10}
          width={30}
          height={30}
        >
          <path
            d="M38.349 5.358l-12.991 13.91-12.991-13.91h25.982z"
            fill="#fff"
            stroke="#ECEDED"
          />
        </mask>
        <g mask={`url(#${maskId})`} fill="#fff">
          <path d="M39.5 20h-29V5h29z" />
          <path d="M37.5 7h-24V5h24z" />
        </g>
      </g>
      <defs>
        <filter
          id={filterId}
          x={0.5}
          y={0}
          width={49}
          height={35}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy={5} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default SvgSelectedTabArrow
