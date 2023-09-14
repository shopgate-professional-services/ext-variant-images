import { connect } from 'react-redux';
import { getHasImageCharacteristics, getProductsVariants } from './selectors';

/**
 * Maps the contents of the state to the component props.
 * @param {Object} state The current application state.
 * @param {Object} props Component props.
 * @return {Object} The extended component props.
 */
const mapStateToProps = (state, props) => ({
  hasImageCharacteristics: getHasImageCharacteristics(state, props),
  productVariants: getProductsVariants(state, props),
});

export default connect(mapStateToProps);
