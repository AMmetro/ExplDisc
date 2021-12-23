import * as React from 'react'
import type {SVGProps} from 'react'

const SvgSearchBig = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m18.032 16.618 3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675a9 9 0 1 1 1.414-1.414ZM11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z"
      fill="#FF6F00"
    />
  </svg>
)

export default SvgSearchBig
