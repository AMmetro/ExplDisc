import * as React from 'react'

function SvgDashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M13.8 1.233l.149.12 9.202 7.888A1 1 0 0122 10.866V20a3 3 0 01-2.824 2.995L19 23H5a3 3 0 01-2.995-2.824L2 20v-9.187a1 1 0 01-1.239-1.54l.09-.087 9.2-7.839a3 3 0 013.748-.114zm-2.355 1.564l-.097.073L4 9.13V20a1 1 0 00.883.993L5 21h3v-8a1 1 0 01.883-.993L9 12h6a1 1 0 01.993.883L16 13v8h3a1 1 0 00.993-.883L20 20V9.508a1 1 0 01.044-.295l-7.397-6.341a1 1 0 00-1.202-.075zM14 14h-4v7h4v-7zm-1-7a1 1 0 010 2h-2a1 1 0 010-2h2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgDashboard
