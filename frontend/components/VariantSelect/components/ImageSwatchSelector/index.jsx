import React, { Component } from 'react';
import BaseSelector from '../BaseSelector';
import styles from './styles';
import connector from './connector';
import getConfig from '../../../../helpers/getConfig';

const {
  showLableBeneathImage,
} = getConfig();

/**
 * Color Swatch component
 */
class ImageSwatchSelector extends Component {
  /**
   * Handel click and sends color selection report
   */
  handelClick = () => {
    const { characteristicsId, value } = this.props;
    this.props.sendReport({ id: characteristicsId, value: value.id });
  };

  /**
   * Render component
   * @return {JSX}
   */
  render() {
    const { label, selectable } = this.props.value || {};
    const imageSrc = this.props.imageUrl;

    return (
      <BaseSelector
        {...this.props}
        additionalAction={this.handelClick}
      >
        <div
          title={label}
          className={selectable ? styles.image(imageSrc) : `${styles.image(imageSrc)} ${styles.unselectable}`}
          aria-label={label}
        />
        {showLableBeneathImage ? (
          <div className={styles.label}>{label}</div>
        ) : null
        }
      </BaseSelector>
    );
  }
}

export default connector(ImageSwatchSelector);
