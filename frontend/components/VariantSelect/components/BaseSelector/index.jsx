import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

/**
 * Base selector component
 */
class BaseSelector extends Component {
  static propTypes = {
    characteristicsId: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    select: PropTypes.func.isRequired,
    value: PropTypes.shape({
      id: PropTypes.string.isRequired,
      selectable: PropTypes.bool.isRequired,
    }).isRequired,
    additionalAction: PropTypes.func,
    children: PropTypes.node,
    preselect: PropTypes.bool,
  };

  static defaultProps = {
    additionalAction: () => {},
    children: null,
    preselect: false,
  };

  /**
   * Check of preselect when component mounts.
   */
  componentDidMount() {
    if (this.props.preselect) {
      this.handelClick();
    }
  }

  /**
   * Handel selection click
   */
  handelClick = () => {
    const {
      characteristicsId, value, select, additionalAction,
    } = this.props;
    select({ id: characteristicsId, value: value.id });
    additionalAction();
  };

  /**
   * Render basic selector component
   * @return {JSX}
   */
  render() {
    const { id, selectable } = this.props.value;
    return (
      <button
        key={id}
        id={id}
        onClick={this.handelClick}
        disabled={!selectable}
        className={styles.basicSelect(this.props.isSelected)}
        aria-hidden={!selectable}
        aria-checked={this.props.isSelected}
        role="radio"
      >
        {this.props.children}
      </button>
    );
  }
}

export default BaseSelector;
