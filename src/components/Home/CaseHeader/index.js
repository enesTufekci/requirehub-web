import React from 'react'
import requireHubLogo from 'assets/images/requirehub-logo.png'
import gitHubLogo from 'assets/images/github-logo.png'

import './CaseHeader.css'

const CaseHeader = () => {
  return (
    <div className="case-header">
        <img
        	requirement="requirehub-logo"
        	className="case-header-requirehub"
        	src={requireHubLogo}
        	alt="RequireHub Logo" />
        <span className="case-header-on"> on </span>
        <img
        	requirement="github-logo"
        	className="case-header-github"
        	src={gitHubLogo}
        	alt="Github Logo" />
    </div>
  )
}

export default CaseHeader
