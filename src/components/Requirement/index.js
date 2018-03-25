import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { Switch, Route } from 'react-router-dom'
import RequirementCreate from './create'
import './Requirement.css'

const Requirement = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/create`} component={RequirementCreate} />
    </Switch>
  )
}

Requirement.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default Requirement
