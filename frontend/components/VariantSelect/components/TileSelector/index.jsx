import React from 'react';
import BaseSelector from '../BaseSelector';
import styles from './styles';

export default (props) => {
  const { label } = props.value || {};
  return (
    <BaseSelector noBorder {...props}>
      <div className={styles.tile}>{label}</div>
    </BaseSelector>);
};
