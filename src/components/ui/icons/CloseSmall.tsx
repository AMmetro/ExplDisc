import * as React from 'react'

function SvgCloseSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 10.574l3.278-3.279a1.008 1.008 0 011.427 1.427L13.426 12l3.279 3.278a1.008 1.008 0 01-1.427 1.427L12 13.426l-3.278 3.279a1.008 1.008 0 01-1.427-1.427L10.574 12 7.295 8.722a1.008 1.008 0 011.427-1.427L12 10.574z"
      />
    </svg>
  )
}

export default SvgCloseSmall
