import { connect } from 'react-redux'

import { createRequirement } from '../requirementReducer'
import RequirementCreate from './RequirementCreate'

export default connect(null, { createRequirement })(RequirementCreate)
