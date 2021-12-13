import {FormattedNumber} from 'react-intl'

import {SvgProgressGauge} from './SvgProgressGauge'

type Props = {
  achieved: number
  pending?: number
  required: number
}

export function PaymentsVolumeProgressGauge({
  achieved,
  pending,
  required,
}: Props) {
  const progressStroke = 10
  const numberIndent = progressStroke / 2

  return (
    <div className="pb-5">
      <div className="inline-block relative">
        <SvgProgressGauge
          achieved={achieved}
          pending={pending}
          required={required}
          progressStroke={progressStroke}
        />

        <div className="absolute inset-x-0 top-16 flex justify-center">
          <span className="font-bold text-34">
            <FormattedNumber value={achieved} />
          </span>
        </div>

        <div
          className="absolute -bottom-6 transform -translate-x-1/2"
          style={{marginLeft: numberIndent}}
        >
          <span className="text-13 text-grey-3">
            <FormattedNumber value={0} />
          </span>
        </div>

        <div
          className="absolute right-0 -bottom-6 transform translate-x-1/2"
          style={{marginRight: numberIndent}}
        >
          <span className="text-13 text-grey-3">
            <FormattedNumber value={required} />
          </span>
        </div>
      </div>
    </div>
  )
}
