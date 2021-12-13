import {useCallback, useState} from 'react'

import type {CustomerSearchType} from './atd/sdk'
import type {DashboardData} from './dashboard'

export enum LoadingTypes {
  CustomerSearchType,
}

export type LoadingState =
  | {
      isLoading: false
    }
  | {
      isLoading: true
      loadingType: LoadingTypes
    }

export function useDashboardApi(
  initialDashboard: DashboardData,
  initialCustomerSearchType: CustomerSearchType
) {
  const [dashboardData, setDashboardData] =
    useState<DashboardData>(initialDashboard)

  const [customerSearchType, setCustomerSearchType] = useState(
    initialCustomerSearchType
  )

  const [loadingState, setLoadingState] = useState<LoadingState>({
    isLoading: false,
  })

  function setCustomerSearchLoading(isLoading: boolean) {
    if (isLoading) {
      setLoadingState({
        isLoading: true,
        loadingType: LoadingTypes.CustomerSearchType,
      })
    } else {
      setLoadingState({
        isLoading: false,
      })
    }
  }

  const onChangeCustomerSearchType = useCallback(
    (newSearchType: CustomerSearchType) => {
      async function getDashboardApi(customerSearchType: CustomerSearchType) {
        setCustomerSearchLoading(true)
        const response = await fetch(
          `/api/dashboard?customers=${customerSearchType}`,
          {
            method: 'POST',
          }
        )
        const results = await response.json()
        setCustomerSearchLoading(false)
        setDashboardData(results)
      }

      getDashboardApi(newSearchType).then(() => {
        setCustomerSearchType(newSearchType)
      })
    },
    []
  )

  return {
    loadingState,
    dashboardData,
    customerSearchType,
    onChangeCustomerSearchType,
  }
}
