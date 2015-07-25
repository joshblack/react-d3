import { svg } from 'd3';
import { PropTypes } from 'react';

export default class Line {
  static propTypes = {
    data: PropTypes.array.isRequired,
    x: PropTypes.func.isRequired,
    y:  PropTypes.func.isRequired
  }

  static defaultProps = {
    stroke: '#666666'
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
          stroke: this.props.stroke,
          strokeWidth: '1.5px'
        }}
        d={this.line(this.props.data)} />
    );
  }
}
