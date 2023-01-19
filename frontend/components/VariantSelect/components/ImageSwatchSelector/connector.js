import { connect } from 'react-redux';
import { reportImageSelection } from '../../../../actions';

/**
 * Maps the contents of the state to the component props.
 * @param  {Function} dispatch The redux dispatch function.
 * @return {Object} The extended component props.
 */
const mapDispatchToProps = dispatch => ({
  sendReport: selection => (
    dispatch(reportImageSelection(selection))
  ),
});

export default connect(null, mapDispatchToProps);
