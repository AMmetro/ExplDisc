import * as React from 'react'

function SvgCategoryFitness(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M20.5 8a2.5 2.5 0 012.5 2.5v3a2.5 2.5 0 01-3 2.45v.55l-.005.164a2.5 2.5 0 01-4.99 0L15 16.5V15l.007-.117a1 1 0 011.986 0L17 15v1.5l.008.09a.5.5 0 00.984 0L18 16.5v-9a.5.5 0 00-.992-.09L17 7.5V12a1 1 0 01-.883.993L16 13H9v3.5a2.5 2.5 0 01-4.995.164L4 16.5v-.55a2.5 2.5 0 01-2.995-2.286L1 13.5v-3a2.5 2.5 0 013-2.45V7.5l.005-.164a2.5 2.5 0 014.99 0L9 7.5V9l-.007.117a1 1 0 01-1.986 0L7 9V7.5l-.008-.09a.5.5 0 00-.984 0L6 7.5v9a.5.5 0 00.992.09L7 16.5V12a1 1 0 011-1h7V7.5a2.5 2.5 0 014.995-.164L20 7.5v.55c.162-.033.329-.05.5-.05zm-17 2a.5.5 0 00-.492.41L3 10.5v3a.5.5 0 00.992.09L4 13.5v-3a.5.5 0 00-.5-.5zm17 0a.5.5 0 00-.5.5v3a.5.5 0 101 0v-3a.5.5 0 00-.5-.5z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgCategoryFitness
