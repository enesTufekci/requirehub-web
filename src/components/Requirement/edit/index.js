import { connect } from 'react-redux'
import { updateRequirement } from '../requirementReducer'

import RequirementEdit from './RequirementEdit'

export default connect(null, { updateRequirement })(RequirementEdit)
