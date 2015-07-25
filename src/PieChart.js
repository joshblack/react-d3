import SVG from './SVG';
import Radium from 'radium';
import { layout, svg } from 'd3';
import { Spring } from 'react-motion';
import { Component, PropTypes } from 'react';

export default class PieChart extends Component {
  static defaultProps = {
    data: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    outerRadius: PropTypes.number.isRequired,
    innerRadius: PropTypes.number.isRequired
  }

  state = { ...[...Array(this.props.data.length)].map(() => false) }

  onMouseOver = (i) => () => this.setState({ [i]: true })
  onMouseOut  = (i) => () => this.setState({ [i]: false })

  render() {
    const { innerRadius, outerRadius, width, height } = this.props;
    const pie = layout.pie().padAngle(.02);
    const arc = svg.arc().padRadius(outerRadius).innerRadius(innerRadius);

    return (
      <SVG width={width} height={height}>
        <g transform={`translate(${width / 2}, ${height / 2})`}>
          {
            pie(this.props.data).map(
              (dataPoint, i) =>
                <Spring
                  key={i}
                  endValue={{ val: this.state[i] ? outerRadius : outerRadius - 20 }}>
                  {
                    ({ val }) =>
                      <Path
                        d={arc({ ...dataPoint, outerRadius: val })}
                        onMouseOver={this.onMouseOver(i)}
                        onMouseOut={this.onMouseOut(i)} />
                  }
                </Spring>)
          }
        </g>
      </SVG>
    );
  }
}

@Radium
class Path extends Component {
  render() {
    return (
      <path
        style={{
          fill: '#CCCCCC',
          stroke: '#333333',
          strokeWidth: 1.5,
          transition: 'fill 250ms linear',
          cursor: 'pointer',
          ':hover': {
            fill: '#999999',
            stroke: '#000000'
          }
        }}
        d={this.props.d}
        onMouseOver={this.props.onMouseOver}
        onMouseOut={this.props.onMouseOut}
      />
    );
  }
}
