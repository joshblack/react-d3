import SVG from './SVG';
import Line from './Line';
import Area from './Area';
import { PropTypes } from 'react';
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

    return (
      <SVG width={width} height={height}>
        <g>
          <Line
            x={(d) => x(d.date)}
            y={(d) => y(d.price)}
            data={data} />
          <Area
            x={(d) => x(d.date)}
            y={(d) => y(d.price)}
            y0={height}
            data={data} />
        </g>
      </SVG>
    );
  }
}
