import * as React from 'react'

function SvgCartSmall(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M12 3a4 4 0 013.995 3.8L16 7h1.209c.817 0 1.515.57 1.69 1.355l.026.15 1.047 7.873a3.198 3.198 0 01-2.986 3.617l-.18.005H7.195a3.198 3.198 0 01-3.186-3.443l.02-.18 1.046-7.872A1.732 1.732 0 016.64 7.007L6.791 7H8a4 4 0 014-4zm4.973 6H16v1a1 1 0 01-1.993.117L14 10V9h-4v1a1 1 0 01-1.993.117L8 10V9h-.974l-1.015 7.641a1.2 1.2 0 00.937 1.333l.121.02.126.006h9.611c.679 0 1.213-.566 1.193-1.233l-.01-.126L16.973 9zM12 5a2 2 0 00-1.995 1.85L10 7h4a2 2 0 00-2-2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCartSmall
