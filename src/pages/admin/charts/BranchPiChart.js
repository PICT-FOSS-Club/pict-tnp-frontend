import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['CE', 'IT', 'EnTC'],
    datasets: [
      {
        label: '# of placed',
        data: [32, 19, 3],
        backgroundColor: [
          'rgba(153,153,153, 0.2)',
          'rgba(209,209,209, 0.2)',
          'rgba(159,197,232, 0.2)',
        ],
        borderColor: [
          'rgba(153,153,153, 1)',
          'rgba(209,209,209, 1)',
          'rgba(159,197,232, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  export const options = {
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
const BranchPieChart = () => {
    return ( 
        <Pie data={data} options={options}/>
     );
}
 
export default BranchPieChart;