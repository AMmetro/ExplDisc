import * as React from 'react'

function SvgLocationSmall(props: React.SVGProps<SVGSVGElement>) {
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
        d="M12 3.5c3.864 0 7 3.105 7 6.94 0 2.892-1.243 5.384-3.288 7.46a15.038 15.038 0 01-2.21 1.845c-.4.274-.727.472-.951.594l-.551.288-.551-.288-.217-.123-.263-.16A15.038 15.038 0 018.287 17.9C6.242 15.823 5 13.331 5 10.44 5 6.605 8.136 3.5 12 3.5zm0 2c-2.764 0-5 2.214-5 4.94 0 2.306 1.007 4.325 2.712 6.056.507.514 1.045.97 1.589 1.368l.459.32.24.157.115-.075.257-.171a13.056 13.056 0 001.915-1.6C15.992 14.766 17 12.746 17 10.44c0-2.726-2.237-4.94-5-4.94zm0 3a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0112 8.5z"
      />
    </svg>
  )
}

export default SvgLocationSmall
