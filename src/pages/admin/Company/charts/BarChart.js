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


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



const BarChart = (props) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Branch distribution',
      },
    },
  };
  
  const labels = ['Computer', 'IT', 'EnTC'];
  
  const data = {
    labels,
    datasets: [
      {
        label: 'Branchwise placement',
        data: [props.csPlacedStudents, props.itPlacedStudents, props.entcPlacedStudents],
        backgroundColor: ['#999999','#d1d1d1','#9fc5e8'],
        barTickness:2,
      }
    ],
  };
    return ( 
        <Bar options={options} data={data} />
     );
}
 
export default BarChart;