import React from 'react'
import { shallow } from 'enzyme'

import requireHubLogo from 'assets/images/requirehub-logo-white.png'
import gitHubLogo from 'assets/images/github-logo.png'

import CaseHeader from './index'

describe('CaseHeader Component', () => {
  const wrapper = shallow(<CaseHeader />)
  it('renders requirehub logo correctly', () => {
    const requireHubLogoImg = wrapper.find('img').get(0)
    expect(requireHubLogoImg.props.src).toBe(requireHubLogo)
    expect(requireHubLogoImg.props.alt).toBe('RequireHub Logo')
  })
  it('renders github logo correctly', () => {
    const gitHubLogoImg = wrapper.find('img').get(1)
    expect(gitHubLogoImg.props.src).toBe(gitHubLogo)
    expect(gitHubLogoImg.props.alt).toBe('Github Logo')
  })
})
