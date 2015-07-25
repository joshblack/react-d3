import React, { Component } from 'react';
import { PieChart } from 'react-d3';

const data = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

export default class App extends Component {
  render() {
    return (
      <section>
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
