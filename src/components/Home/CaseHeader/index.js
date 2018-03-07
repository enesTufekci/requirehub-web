import React from 'react'
import requireHubLogo from 'assets/images/requirehub-logo-white.png'
import gitHubLogo from 'assets/images/github-logo.png'

import './CaseHeader.css'

const CaseHeader = () => {
  return (
    <div className="case-header">
      <div className="case-header-item">
        <img src={requireHubLogo} alt="RequireHub Logo" />
      </div>
      <div className="case-header-item">
        <span>On</span>
      </div>
      <div className="case-header-item">
        <img src={gitHubLogo} alt="Github Logo" />
      </div>
    </div>
  )
}

export default CaseHeader