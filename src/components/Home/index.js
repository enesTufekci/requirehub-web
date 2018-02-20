import { connect } from 'react-redux';
import Home from './Home';

const mapStateToProps = ({app}) => ({
  requirements: app.requirements,
});

export default connect(mapStateToProps, null)(Home);
