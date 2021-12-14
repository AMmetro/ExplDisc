import type {GetServerSideProps} from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {useIntl} from 'react-intl'

import {DashboardContent} from '../../../../components/DashboardContent'
import {DashboardHeader} from '../../../../components/DashboardHeader'
import {AuthenticatedShell} from '../../../../components/ui/AuthenticatedShell'
import {DashboardContext} from '../../../../lib/dashboardContext'
import {CustomerSearchType} from '../../../../lib/juiceplus/atd/sdk'
import {getCms} from '../../../../lib/juiceplus/cms'
import * as api from '../../../../lib/juiceplus/dashboard'
import {dashboardApi} from '../../../../lib/juiceplus/dashboardApi'
import {useDashboardApi} from '../../../../lib/juiceplus/useDashboardApi'
import {extractRouterLocale} from '../../../../lib/router'
import type {ActivePartner} from '../../../../lib/user'
import {isActivePartner, getUser} from '../../../../lib/user'

// Check renewal conditions only when on client side as local storage isn't available on server
const EnforceLicenseRenewal = dynamic(async () => {
  const {EnforceLicenseRenewal} = await import(
    '../../../../components/EnforceLicenseRenewal'
  )
  return EnforceLicenseRenewal
})

type Props = {
  user: ActivePartner
  customerSearchType: CustomerSearchType
  dashboardData: api.DashboardData
} & api.DashboardContent

export default function DashboardIndex({
  user,
  authenticatedShell,
  resourceMenuItems,
  dashboardData: initialDashboardData,
  customerSearchType: initialCustomerSearchType,
}: Props) {
  let intl = useIntl()

  const {
    loadingState,
    dashboardData,
    customerSearchType,
    onChangeCustomerSearchType,
  } = useDashboardApi(initialDashboardData, initialCustomerSearchType)

  const {dashboard, actions, stats} = dashboardData

  return (
    <DashboardContext.Provider
      value={{
        onChangeCustomerSearchType,
        loadingState,
      }}
    >
      <Head>
        <title>
          {intl.formatMessage({
            defaultMessage: 'Dashboard • JuicePlus+',
            id: 'ae7afe256179',
            description: 'Dashboard page title',
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            defaultMessage: 'JuicePlus+',
            id: '8e4412e2c00f',
            description: 'Dashboard page description',
          })}
        />
      </Head>

      <EnforceLicenseRenewal user={user} />

      <AuthenticatedShell content={authenticatedShell} user={user}>
        <main className="grid grid-cols-1 gap-y-4">
          <div className="max-w-screen-xl w-full mx-auto px-4">
            <div className="pt-7 pb-3.5 pl-safe-left pr-safe-right">
              <DashboardHeader
                id={user.partnerId}
                resourceMenuItems={resourceMenuItems}
                name={user.name.first}
                rank={user.rank}
                clubLevel={dashboard.data?.clubLevel}
              />
            </div>
          </div>

          <div className="bg-grey-6">
            <div className="max-w-screen-xl mx-auto px-4 py-10">
              <DashboardContent
                dashboard={dashboard}
                stats={stats}
                actions={actions}
                customerSearchType={customerSearchType}
                rank={user.rank.rank}
                isPending={false}
              />
            </div>
          </div>
        </main>
      </AuthenticatedShell>
    </DashboardContext.Provider>
  )
}

export let getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  let {'react-auth-token': token} = ctx.req.cookies

  let user = await getUser(token)
  const {country, language} = ctx.query

  if (
    user.kind === 'Authenticated' &&
    (user.processingOnboarding || user.hasPCIAgreement === false)
  ) {
    return {
      redirect: {
        destination: `/${country}/${language}/portal/welcome`,
        permanent: false,
      },
    }
  }

  if (isActivePartner(user)) {
    const customerSearchType = CustomerSearchType.Direct
    const byPartnerId = await dashboardApi(token, customerSearchType)

    console.log('-----------byPartnerId---------------')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    console.log(byPartnerId.dashboard.data?.promotion.tracks.express.trackTime)
    // ----------------------------------------------------------
    let locale = extractRouterLocale(ctx.query)
    let cms = getCms(locale)
    let dashboardContent = await api.getContent(cms)
    return {
      props: {
        dashboardData: byPartnerId,
        ...dashboardContent,
        customerSearchType,
        user,
      },
    }
  }

  return {
    redirect: {
      destination: `/${country}/${language}/login/partner`,
      permanent: false,
    },
  }
}
