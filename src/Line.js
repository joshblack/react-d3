import { svg } from 'd3';
import { PropTypes } from 'react';

export default class Line {
  static defaultProps = {
    data: PropTypes.array.isRequired,
    x: PropTypes.func.isRequired,
    y:  PropTypes.func.isRequired
  }

  constructor(props) {
    this.line = svg.line()
      .x(props.x)
      .y(props.y);
  }

  render() {
    return (
      <path
        style={{
          fill: 'none',
          stroke: '#666666',
          strokeWidth: '1.5px'
        }}
        d={this.line(this.props.data)} />
    );
  }
}
