import { PropTypes } from 'react';

export default class SVG {
  static defaultProps = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  render() {
    return (
      <svg
        width={this.props.width}
        height={this.props.height}>
        {this.props.children}
      </svg>
    );
  }
}
