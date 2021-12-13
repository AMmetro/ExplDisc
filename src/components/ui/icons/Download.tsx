import * as React from 'react'

function SvgDownload(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M20 15a1 1 0 01.993.883L21 16v3.2c0 .968-.783 1.721-1.737 1.794L19.11 21H4.889c-.97 0-1.802-.705-1.883-1.649L3 19.2V16a1 1 0 011.993-.117L5 16v3h14v-3a1 1 0 011-1zM11.883 3.007L12 3a1 1 0 01.993.883L13 4v7.585l1.293-1.292a1 1 0 011.32-.083l.094.083a1 1 0 01.083 1.32l-.083.094L12 15.414l-3.707-3.707a1 1 0 011.32-1.497l.094.083L11 11.585V4a1 1 0 01.883-.993L12 3l-.117.007z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )
}

export default SvgDownload
