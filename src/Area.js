import { svg } from 'd3';
import { PropTypes } from 'react';

export default class Area {
  static propTypes = {
    data: PropTypes.array.isRequired,
    x: PropTypes.func.isRequired,
    y: PropTypes.func.isRequired,
    y0: PropTypes.number,
    fill: PropTypes.string
  }

  static defaultProps = {
    fill: '#E7E7E7'
  }

  constructor(props) {
    this.area = svg.area()
      .x(props.x)
      .y(props.y)
      .y0(props.y0);
  }

  render() {
    return (
      <path
        style={{ fill: this.props.fill }}
        d={this.area(this.props.data)} />
    );
  }
}
