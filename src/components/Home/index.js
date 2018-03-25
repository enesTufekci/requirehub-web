import { connect } from 'react-redux'
import Home from './Home'

const mapStateToProps = ({ requirement }) => ({
  requirements: requirement.requirements
})

export default connect(mapStateToProps, null)(Home)
