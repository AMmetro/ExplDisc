import {screen} from '@testing-library/react'

import {renderForTest} from '../lib/renderForTest'
import {DashboardHeader} from './DashboardHeader'

describe('<DashboardHeader />', () => {
  let props = {
    id: 'USM0000004',
    rank: {
      rank: 1,
      title: 'P',
    },
    name: 'Kendall',
    clubLevel: 54,
  }

  test('Dashboard Header will render with following text.', () => {
    renderForTest(<DashboardHeader resourceMenuItems={[]} {...props} />)

    expect(screen.getByText(/Hi, Kendall/)).toBeInTheDocument()
    expect(screen.getByText('P')).toBeInTheDocument()
    expect(screen.getByText(/Club Level/)).toBeInTheDocument()
    expect(screen.getByText('ID: USM0000004')).toBeInTheDocument()
  })

  test('Dashboard Header club level will render with null when clubLevel is not there.', () => {
    props.clubLevel = Number(null)
    renderForTest(<DashboardHeader resourceMenuItems={[]} {...props} />)

    expect(screen.queryByText('Club Level')).not.toBeInTheDocument()
  })
})
