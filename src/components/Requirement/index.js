import { connect } from 'react-redux';

import { createRequirement } from '../../appReducer';
import Requirement from './Requirement';

export default connect(null, { createRequirement })(Requirement);
