import { connect } from 'react-redux'

import { createRequirement } from '../../../appReducer'
import RequirementCreate from './RequirementCreate'

export default connect(null, { createRequirement })(RequirementCreate)
