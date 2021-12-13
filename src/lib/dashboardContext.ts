import {createContext, useContext} from 'react'

import type {CustomerSearchType} from './juiceplus/atd/sdk'
import type {LoadingState} from './juiceplus/useDashboardApi'

export type DashboardContextProps = {
  onChangeCustomerSearchType(customerSearchType: CustomerSearchType): void
  loadingState: LoadingState
}

export const DashboardContext = createContext<DashboardContextProps>({
  loadingState: {
    isLoading: false,
  },
  onChangeCustomerSearchType() {
    throw new Error('Not implemented')
  },
})

export default function useDashboardContext() {
  return useContext(DashboardContext)
}
