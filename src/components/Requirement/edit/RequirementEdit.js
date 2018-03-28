import React from 'react'
import PropTypes from 'prop-types'
import RequirementForm from '../common/RequirementForm'

const RequirementEdit = ({ requirement }) => {
  return (
    <div className="requirement-container">
      <RequirementForm values={requirement} onSubmit={() => {}} />
    </div>
  )
}

RequirementEdit.propTypes = {
  requirement: PropTypes.shape({
    uuid: PropTypes.string,
    title: PropTypes.string,
    steps: PropTypes.string,
    expected: PropTypes.string
  })
}

export default RequirementEdit
