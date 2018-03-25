import React from 'react'
import PropTypes from 'prop-types'

import { Switch, Route } from 'react-router-dom'
import RequirementCreate from './create'

const Requirement = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/create`} component={RequirementCreate} />
    </Switch>
  )
}

Requirement.propTypes = {
  match: PropTypes.object.isRequired
}

export default Requirement
