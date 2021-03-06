import { time } from 'd3';
import { LineChart } from 'react-d3';
import { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <section>
        <h1>Line Chart Example</h1>
        <p>Inspired by <a href="http://bl.ocks.org/mbostock/9490313">this block</a></p>
        <LineChart
          data={data}
          width={960}
          height={69}
        />
      </section>
    );
  }
}

const parseDate = time.format('%b %Y').parse;
const data = [
  { date: 'Jan 2000', price: 100.52 },
  { date: 'Feb 2000', price: 92.11 },
  { date: 'Mar 2000', price: 106.11 },
  { date: 'Apr 2000', price: 99.95 },
  { date: 'May 2000', price: 96.31 },
  { date: 'Jun 2000', price: 98.33 },
  { date: 'Jul 2000', price: 100.74 },
  { date: 'Aug 2000', price: 118.62 },
  { date: 'Sep 2000', price: 101.19 },
  { date: 'Oct 2000', price: 88.5 },
  { date: 'Nov 2000', price: 84.12 },
  { date: 'Dec 2000', price: 76.47 },
  { date: 'Jan 2001', price: 100.76 },
  { date: 'Feb 2001', price: 89.98 },
  { date: 'Mar 2001', price: 86.63 },
  { date: 'Apr 2001', price: 103.7 },
  { date: 'May 2001', price: 100.82 },
  { date: 'Jun 2001', price: 102.35 },
  { date: 'Jul 2001', price: 94.87 },
  { date: 'Aug 2001', price: 90.25 },
  { date: 'Sep 2001', price: 82.82 },
  { date: 'Oct 2001', price: 97.58 },
  { date: 'Nov 2001', price: 104.5 },
  { date: 'Dec 2001', price: 109.36 },
  { date: 'Jan 2002', price: 97.54 },
  { date: 'Feb 2002', price: 88.82 },
  { date: 'Mar 2002', price: 94.15 },
  { date: 'Apr 2002', price: 75.82 },
  { date: 'May 2002', price: 72.97 },
  { date: 'Jun 2002', price: 65.31 },
  { date: 'Jul 2002', price: 63.86 },
  { date: 'Aug 2002', price: 68.52 },
  { date: 'Sep 2002', price: 53.01 },
  { date: 'Oct 2002', price: 71.76 },
  { date: 'Nov 2002', price: 79.16 },
  { date: 'Dec 2002', price: 70.58 },
  { date: 'Jan 2003', price: 71.22 },
  { date: 'Feb 2003', price: 71.13 },
  { date: 'Mar 2003', price: 71.57 },
  { date: 'Apr 2003', price: 77.47 },
  { date: 'May 2003', price: 80.48 },
  { date: 'Jun 2003', price: 75.42 },
  { date: 'Jul 2003', price: 74.28 },
  { date: 'Aug 2003', price: 75.12 },
  { date: 'Sep 2003', price: 80.91 },
  { date: 'Oct 2003', price: 81.96 },
  { date: 'Nov 2003', price: 83.08 },
  { date: 'Dec 2003', price: 85.05 },
  { date: 'Jan 2004', price: 91.06 },
  { date: 'Feb 2004', price: 88.7 },
  { date: 'Mar 2004', price: 84.41 },
  { date: 'Apr 2004', price: 81.04 },
  { date: 'May 2004', price: 81.59 },
  { date: 'Jun 2004', price: 81.19 },
  { date: 'Jul 2004', price: 80.19 },
  { date: 'Aug 2004', price: 78.17 },
  { date: 'Sep 2004', price: 79.13 },
  { date: 'Oct 2004', price: 82.84 },
  { date: 'Nov 2004', price: 87.15 },
  { date: 'Dec 2004', price: 91.16 },
  { date: 'Jan 2005', price: 86.39 },
  { date: 'Feb 2005', price: 85.78 },
  { date: 'Mar 2005', price: 84.66 },
  { date: 'Apr 2005', price: 70.77 },
  { date: 'May 2005', price: 70.18 },
  { date: 'Jun 2005', price: 68.93 },
  { date: 'Jul 2005', price: 77.53 },
  { date: 'Aug 2005', price: 75.07 },
  { date: 'Sep 2005', price: 74.7 },
  { date: 'Oct 2005', price: 76.25 },
  { date: 'Nov 2005', price: 82.98 },
  { date: 'Dec 2005', price: 76.73 },
  { date: 'Jan 2006', price: 75.89 },
  { date: 'Feb 2006', price: 75.09 },
  { date: 'Mar 2006', price: 77.17 },
  { date: 'Apr 2006', price: 77.05 },
  { date: 'May 2006', price: 75.04 },
  { date: 'Jun 2006', price: 72.15 },
  { date: 'Jul 2006', price: 72.7 },
  { date: 'Aug 2006', price: 76.35 },
  { date: 'Sep 2006', price: 77.26 },
  { date: 'Oct 2006', price: 87.06 },
  { date: 'Nov 2006', price: 86.95 },
  { date: 'Dec 2006', price: 91.9 },
  { date: 'Jan 2007', price: 93.79 },
  { date: 'Feb 2007', price: 88.18 },
  { date: 'Mar 2007', price: 89.44 },
  { date: 'Apr 2007', price: 96.98 },
  { date: 'May 2007', price: 101.54 },
  { date: 'Jun 2007', price: 100.25 },
  { date: 'Jul 2007', price: 105.4 },
  { date: 'Aug 2007', price: 111.54 },
  { date: 'Sep 2007', price: 112.6 },
  { date: 'Oct 2007', price: 111 },
  { date: 'Nov 2007', price: 100.9 },
  { date: 'Dec 2007', price: 103.7 },
  { date: 'Jan 2008', price: 102.75 },
  { date: 'Feb 2008', price: 109.64 },
  { date: 'Mar 2008', price: 110.87 },
  { date: 'Apr 2008', price: 116.23 },
  { date: 'May 2008', price: 125.14 },
  { date: 'Jun 2008', price: 114.6 },
  { date: 'Jul 2008', price: 123.74 },
  { date: 'Aug 2008', price: 118.16 },
  { date: 'Sep 2008', price: 113.53 },
  { date: 'Oct 2008', price: 90.24 },
  { date: 'Nov 2008', price: 79.65 },
  { date: 'Dec 2008', price: 82.15 },
  { date: 'Jan 2009', price: 89.46 },
  { date: 'Feb 2009', price: 90.32 },
  { date: 'Mar 2009', price: 95.09 },
  { date: 'Apr 2009', price: 101.29 },
  { date: 'May 2009', price: 104.85 },
  { date: 'Jun 2009', price: 103.01 },
  { date: 'Jul 2009', price: 116.34 },
  { date: 'Aug 2009', price: 117 },
  { date: 'Sep 2009', price: 118.55 },
  { date: 'Oct 2009', price: 119.54 },
  { date: 'Nov 2009', price: 125.79 },
  { date: 'Dec 2009', price: 130.32 },
  { date: 'Jan 2010', price: 121.85 },
  { date: 'Feb 2010', price: 127.16 },
  { date: 'Mar 2010', price: 125.55 }
].map(({ date, price }) => ({ date: parseDate(date), price }));
