import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Line } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function DashboardLineChart(props) {
  const { Data, title } = props;
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
    
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#1F37B3", "#29B2E8", "#D9D9D9"],
        lineTension:0.3,
        borderColor: '#DE80FF',
      },
    ],
  });

  return (
    <div style={{ width: "700px", height: "350px" }}>
      <Line
        data={chartData}
        options={{
            
            scales:{
                
                x: {
                    ticks: {
                      display: true,
                    },
                
              
                    // to remove the x-axis grid
                    grid: {
                      drawBorder: false,
                      display: false,
                    },
                  },
                  // to remove the y-axis labels
                  y: {
                    border:{
                        display:false
                    },
                    ticks: {
                      display: true,
                      beginAtZero: true,
                    },
                    // to remove the y-axis grid
                    grid: {
                      drawBorder: true,
                      display: true,
                    },
                  },
            },
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
            
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
