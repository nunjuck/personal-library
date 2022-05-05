import { render, screen } from '@testing-library/react'

import { Header } from './index'

describe('<Header>', () => {
  it('renders correctly', () => {
    const view = render(<Header />)
    expect(view).toMatchSnapshot()
  })
})
