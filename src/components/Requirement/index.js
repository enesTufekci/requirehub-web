import React from 'react'
import ReactRouterPropTypes from 'react-router-prop-types'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Switch, Route } from 'react-router-dom'
import RequirementCreate from './create'
import RequirementEdit from './edit'
import './Requirement.css'

const Requirement = ({ match, requirements }) => {
  return (
    <Switch>
      <Route path={`${match.url}/create`} component={RequirementCreate} />
      <Route
        path={`${match.url}/edit/:id`}
        render={({ match, history }) => {
          const requirement = requirements.filter(
            requirement => requirement.uuid === match.params.id
          )
          return (
            <RequirementEdit
              history={history}
              requirement={requirement ? requirement[0] : null}
            />
          )
        }}
      />
    </Switch>
  )
}

Requirement.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
  requirements: PropTypes.arrayOf(PropTypes.object)
}

const mapStateToProps = ({ requirement: { requirements } }) => ({
  requirements
})

export default connect(mapStateToProps, null)(Requirement)
