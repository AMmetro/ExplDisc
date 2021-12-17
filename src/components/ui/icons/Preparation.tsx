import * as React from 'react'

function SvgPreparation(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.75 4a.75.75 0 01.75.75V6h1a3 3 0 012.995 2.824L20.5 9v5a.5.5 0 01-.992.09L19.5 14V9a2 2 0 00-1.85-1.995L17.5 7h-1v11a2.5 2.5 0 01-2.5 2.5H7.5A2.5 2.5 0 015 18V8.19L2.871 5.182A.75.75 0 013.483 4H15.75zm-.25 1H3.967L6 7.871V18a1.5 1.5 0 001.5 1.5H14a1.5 1.5 0 001.5-1.5v-6.5H7a.5.5 0 01-.492-.41L6.5 11a.5.5 0 01.41-.492L7 10.5h8.5V5zm-6 9.5H12a.5.5 0 01.09.992L12 15.5H9.5a.5.5 0 01-.09-.992l.09-.008H12 9.5zm0-2H12a.5.5 0 01.09.992L12 13.5H9.5a.5.5 0 01-.09-.992l.09-.008H12 9.5zm0-4H12a.5.5 0 01.09.992L12 9.5H9.5a.5.5 0 01-.09-.992L9.5 8.5H12 9.5z"
      />
    </svg>
  )
}

export default SvgPreparation
