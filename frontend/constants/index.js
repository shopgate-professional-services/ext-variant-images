import { getConfig } from '../helpers';

const { imageCharacteristic } = getConfig();

export const IMAGE_LABEL = imageCharacteristic.toLowerCase();

export const IMAGE_SELECTION_MADE = 'image_selection_made';

export const CLEAR_IMAGE_SELECTION = 'clear_image_selection';
