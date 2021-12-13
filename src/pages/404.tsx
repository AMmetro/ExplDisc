import Head from 'next/head'
import {useIntl} from 'react-intl'

export default function FourOhFour() {
  let intl = useIntl()

  return (
    <>
      <Head>
        <title>
          {/* 
            Cannot use `FormattedMessage` because this component is rendered
            outside of the provider context
          */}
          {intl.formatMessage({
            defaultMessage: 'Not Found • JuicePlus+',
            id: '361cee71ccf8',
            description: '404 page title',
          })}
        </title>
      </Head>
      <div>
        <h1>404</h1>
      </div>
    </>
  )
}
