import { imageSelectionMade, clearImageSelectionMade } from '../action-creators';

/**
 * Make color selection
 * @param {Object} selection Selection object
 * @return {Function}
 */
export const reportImageSelection = selection => (dispatch) => {
  dispatch(imageSelectionMade(selection));
};

/**
 * Make color selection
 * @return {Function}
 */
export const doImageSelectionClear = () => (dispatch) => {
  dispatch(clearImageSelectionMade());
};
