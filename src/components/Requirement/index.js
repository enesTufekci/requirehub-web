import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'

import { Switch, Route } from 'react-router-dom'
import RequirementCreate from './create'
import RequirementEdit from './edit'
import './Requirement.css'

const Requirement = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/create`} component={RequirementCreate} />
      <Route path={`${match.url}/edit/:id`} component={RequirementEdit} />
    </Switch>
  )
}

Requirement.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
}

export default Requirement
