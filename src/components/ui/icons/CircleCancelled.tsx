import * as React from 'react'

function SvgCircleCancelled(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm7.749 5.678l-14.07 14.07A9.959 9.959 0 0012 22c5.523 0 10-4.477 10-10 0-2.398-.844-4.6-2.251-6.322zM12 2C6.477 2 2 6.477 2 12c0 2.398.844 4.6 2.251 6.322l14.07-14.07A9.959 9.959 0 0012 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCircleCancelled
