import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

import faker from 'faker';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Branch and Monthwise distribution',
      },
    },
  };
  
  const labels = ['July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'CE',
        data: [12,30,52,41,63,18,42,25,96,12,30],
        backgroundColor: '#999999',
      },
      {
        label: 'IT',
        data: [7,20,12,21,36,8,12,5,46,14,20],
        backgroundColor: '#d1d1d1',
      },
      {
        label: 'EnTC',
        data: [4,26,36,20,40,20,21,15,36,2,10],
        backgroundColor: '#9fc5e8',
      },
    ],
  };

const BarChart = () => {
    return ( 
        <Bar options={options} data={data} />
     );
}
 
export default BarChart;