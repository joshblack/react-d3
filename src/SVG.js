import { PropTypes } from 'react';

export default class SVG {
  static defaultProps = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
  }

  render() {
    return (
      <svg {...this.props} />
    );
  }
}
