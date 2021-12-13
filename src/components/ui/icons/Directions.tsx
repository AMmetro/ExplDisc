import * as React from 'react'

function SvgDirections(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M66.158 7.5a1.875 1.875 0 01.337 3.72l-.337.03h-8.897l-4.24 9.375h5.104c1.036 0 1.875.84 1.875 1.875v6.563l6.75 5.062c.472.354.75.91.75 1.5V37.5h3.75a7.502 7.502 0 017.48 6.94l.02.56v18.75a7.502 7.502 0 01-6.94 7.48l-.56.02H67.5v1.875a7.5 7.5 0 01-7.5 7.5H30a7.5 7.5 0 01-7.5-7.5v-37.5c0-.59.278-1.146.75-1.5L30 29.062V22.5c0-1.036.84-1.875 1.875-1.875h17.032L54.841 7.5h11.317zM27.131 49.863l-.881.304v22.958a3.75 3.75 0 003.75 3.75h30a3.75 3.75 0 003.75-3.75V51.367l-.29.09a32.09 32.09 0 01-20.082-1.09 22.717 22.717 0 00-16.247-.504zM67.5 67.5h3.75a3.752 3.752 0 003.725-3.313L75 63.75V45a3.752 3.752 0 00-3.313-3.725l-.437-.025H67.5V67.5zM43.822 31.875H32.495l-6.244 4.688v9.64l.807-.255a26.435 26.435 0 0117.727.943 28.316 28.316 0 0017.628.965l1.338-.396V36.562l-6.244-4.687h-9.57l-4.585 10.15a1.875 1.875 0 01-2.161 1.047l-.32-.111a1.876 1.876 0 01-1.047-2.161l.111-.32 3.889-8.605zm3.39-7.5H33.75v3.75h11.767l1.695-3.75zm9.038 0h-4.924l-1.695 3.75h6.619v-3.75z"
      />
    </svg>
  )
}

export default SvgDirections
