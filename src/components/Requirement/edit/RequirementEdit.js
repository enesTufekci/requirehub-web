import React from 'react'
import PropTypes from 'prop-types'

const RequirementEdit = ({ requirement }) => {
  return <div>Edit {requirement.uuid}</div>
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
