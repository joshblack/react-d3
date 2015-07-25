import React, { Component } from 'react';
import { PieChart } from 'react-d3';

const data = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

export default class App extends Component {
  render() {
    return (
      <section>
        <h1>Pie Chart Example</h1>
        <p>Inspired by <a href="http://bl.ocks.org/mbostock/32bd93b1cc0fbccc9bf9">this block</a></p>
        <PieChart
          data={data}
          width={960}
          height={500}
          outerRadius={230}
          innerRadius={230 / 3}
        />
      </section>
    );
  }
}
