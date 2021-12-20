import * as React from 'react'

function SvgOrders(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M18.646 1a3 3 0 012.785 1.886l1.497 3.743.024.064.027.102.016.109a.57.57 0 01.005.054V20a3 3 0 01-3 3H5a3 3 0 01-3-3l.002-13.062.01-.101.018-.08.025-.084 1.514-3.787A3 3 0 016.354 1h12.292zM8.999 8H4v12a1 1 0 001 1h15a1 1 0 001-1V8h-5v2a2 2 0 01-2 2h-3a2 2 0 01-2-2V8zM9 16a1 1 0 010 2H7a1 1 0 010-2h2zm5-8h-3v2h3V8zM9.56 3H6.354a1 1 0 00-.928.629L4.477 6h4.655l.43-3zm3.857 0h-1.836l-.43 3h2.694l-.428-3zm5.228 0h-3.208l.43 3h4.655l-.949-2.371A1 1 0 0018.646 3z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgOrders
