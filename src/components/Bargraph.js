import React from 'react'

import { BarSeries,Title, Chart, ArgumentAxis, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';


  const dataset = [
    {
      earning: 10,
      month: 'Jan',
    },
    {
      earning: 5,
      month: 'Feb',
    },
    {
        earning: 7,
      month: 'Mar',
    },
    {
        earning: 4,
      month: 'Apr',
    },
    {
        earning: 5,
      month: 'May',
    },
    {
        earning: 11,
      month: 'June',
    },
    {
        earning: 8,
      month: 'July',
    },
    {
        earning: 12,
      month: 'Aug',
    },
    {
        earning: 18,
      month: 'Sept',
    },
    {
        earning: 16,
      month: 'Oct',
    },
    {
        earning: 13,
      month: 'Nov',
    },
    {
        earning: 10,
      month: 'Dec',
    },
  ];
  

const Bargraph = () => {
  return (
    

    <Chart data = {dataset}>
               <ArgumentAxis />
               <ValueAxis max = {20} />
               <BarSeries valueField = "earning" argumentField = "month" />
               <Title text = "Earning per month" />
               <Animation />
    </Chart>
    
  )
}

export default Bargraph
