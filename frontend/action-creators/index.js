import { IMAGE_SELECTION_MADE, CLEAR_IMAGE_SELECTION } from '../constants';

/**
 * Color selection made action
 * @param {Object} selection Selection made
 * @return {Object}
 */
export const imageSelectionMade = selection => ({
  type: IMAGE_SELECTION_MADE,
  selection,
});

/**
 * Clear color selection action
 * @return {Object}
 */
export const clearImageSelectionMade = () => ({
  type: CLEAR_IMAGE_SELECTION,
});
