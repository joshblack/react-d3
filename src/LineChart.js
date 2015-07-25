import SVG from './SVG';
import { extent, max, scale, svg, time } from 'd3';

export default class LineChart {
  render() {
    const { data, width, height } = this.props;

    const x = time.scale()
      .domain(extent(data, (d) => d.date))
      .range([0, width]);

    const y = scale.linear()
      .domain([0, max(data, (d) => d.price)])
      .range([height, 0]);

    const area = svg.area()
      .x((d) => x(d.date))
      .y0(height)
      .y1((d) => y(d.price));

    const line = svg.line()
      .x((d) => x(d.date))
      .y((d) => y(d.price));

    return (
      <SVG width={width} height={height}>
        <g>
          <Line d={line(data)} />
          <Area d={area(data)} />
        </g>
      </SVG>
    );
  }
}

class Line {
  render() {
    return (
      <path
        style={{
          fill: 'none',
          stroke: '#666666',
          strokeWidth: '1.5px'
        }}
        d={this.props.d} />
    );
  }
}

class Area {
  render() {
    return (
      <path
        style={{ fill: '#E7E7E7' }}
        d={this.props.d} />
    );
  }
}
