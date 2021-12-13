import * as React from 'react'

function SvgRushClock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#rush-clock_svg__clip0_529:5576)">
        <path
          d="M9.5 15.333a6.316 6.316 0 01-4.618-2H3.166a.667.667 0 01-.077-1.33L3.166 12h.754a6.316 6.316 0 01-.533-1.333H1.833a.666.666 0 01-.077-1.329l.077-.004h1.342c-.009-.115-.009-.228-.009-.334 0-.335.027-.669.08-1h-2.08a.668.668 0 01-.077-1.333h2.522a6.356 6.356 0 014.893-3.919V2.71l-.004-.71h-.667a.667.667 0 010-1.333h3.333a.667.667 0 110 1.333H10.5v.667a.667.667 0 01-.005.079A6.333 6.333 0 019.5 15.333zm0-11.334a5 5 0 100 10 5 5 0 000-10zm1.666 6h-2a.667.667 0 01-.666-.666V6.666a.667.667 0 111.333 0v2h1.333a.667.667 0 110 1.333z"
          fill="currentcolor"
        />
      </g>
      <defs>
        <clipPath id="rush-clock_svg__clip0_529:5576">
          <path fill="#fff" transform="translate(.5)" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgRushClock
