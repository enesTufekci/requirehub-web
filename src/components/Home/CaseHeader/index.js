import React from 'react'
import './CaseHeader.css'

const requireHubLogo = require('assets/images/requirehub-logo.png')
const gitHubLogo = require('assets/images/github-logo.png')

const CaseHeader = () => {
  return (
    <div className="case-header">
      <img
        className="case-header-requirehub"
        src={requireHubLogo}
        alt="RequireHub Logo"
      />
      <span className="case-header-on"> on </span>
      <img className="case-header-github" src={gitHubLogo} alt="Github Logo" />
    </div>
  )
}

export default CaseHeader
