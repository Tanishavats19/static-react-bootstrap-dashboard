import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';


const Piechart = () => {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10 },
            { id: 1, value: 15},
            { id: 2, value: 30},
          ],
          paddingAngle: 2,
          cornerRadius: 5,
          innerRadius: 45,
        },
      ]}
      width={400}
      height={200}
    />
  )
}

export default Piechart
