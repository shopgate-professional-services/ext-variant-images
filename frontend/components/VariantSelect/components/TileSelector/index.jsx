import React from 'react';
import BaseSelector from '../BaseSelector';
import styles from './styles';

export default (props) => {
  const { label, selectable } = props.value || {};
  return (
    <BaseSelector noBorder {...props}>
      <div className={selectable ? styles.tile : `${styles.tile} ${styles.unselectable}`}>{label}</div>
    </BaseSelector>);
};
