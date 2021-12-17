import type {PropsWithChildren, ReactNode} from 'react'
import {Children, useState} from 'react'
import {FormattedMessage} from 'react-intl'

import {Celebration} from './ui/icons'

type Props = PropsWithChildren<{
  emptyMessage: {
    title: ReactNode
    text: ReactNode
  }
}>

export function DashboardOverviewActions({emptyMessage, children}: Props) {
  const [showAll, setShowAll] = useState(false)
  let nonNullChildren = Children.toArray(children).filter((c) => c !== null)
  let minTiles = 2
  const maxTiles = showAll ? nonNullChildren.length : 2

  const handleShowAll = () => {
    setShowAll((prevState) => !prevState)
  }

  if (nonNullChildren.length === 0) {
    return (
      <div className="p-12 flex flex-col justify-center items-center">
        <div className="p-8 rounded-full bg-orange-background">
          <Celebration className="text-orange text-64" />
        </div>
        <h3 className="p-4 text-center font-bold text-grey-2">
          {emptyMessage.title}
        </h3>
        <p className="text-center text-grey-2">{emptyMessage.text}</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid auto-rows-fr divide-y divide-grey-5">
        {Children.map(nonNullChildren, (child, index) => (
          <>{index < maxTiles && <div className="p-6">{child}</div>}</>
        ))}
      </div>
      {nonNullChildren.length > minTiles ? (
        <div className="flex flex-col py-4 px-4 items-end">
          <button
            className="pr-2 font-bold text-orange text-14"
            onClick={handleShowAll}
          >
            {maxTiles <= minTiles ? (
              <FormattedMessage
                id="934f31ce3b86"
                defaultMessage="See all"
                description="Button label for see all"
              />
            ) : (
              <FormattedMessage
                id="873e28147399"
                defaultMessage="See less"
                description="Button label for see less"
              />
            )}
          </button>
        </div>
      ) : null}
    </>
  )
}
