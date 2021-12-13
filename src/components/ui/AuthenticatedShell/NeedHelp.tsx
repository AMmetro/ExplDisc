import type {ReactNode} from 'react'
import {FormattedMessage} from 'react-intl'

type Props = {
  needHelp: string
}

export function NeedHelp({needHelp}: Props) {
  return (
    <div className="max-w-screen-md mx-auto mt-8 mb-16 flex justify-center">
      <p className="text-center text-18 font-bold text-orange">
        <FormattedMessage
          id="522e73862127"
          defaultMessage="<a>Need help to get started? Check out our help section!</a>"
          description="Prompt to visit help section"
          values={{
            a: (chunks: ReactNode) => (
              <a target="_blank" rel="noreferrer" href={needHelp}>
                {chunks}
              </a>
            ),
          }}
        />
      </p>
    </div>
  )
}
