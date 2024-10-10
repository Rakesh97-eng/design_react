import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function ProcessChart(props) {
  const { Data, title } = props;
  const data = {
    labels: ["Customer", "Business"],
    datasets: [
      {
        data: [12, 29],
        backgroundColor: [
            '#FDC079',
          '#20C997',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
        legend: {
          display: true,
          position: 'right',
          labels: {
            usePointStyle: true,
            pointStyle: 'line',
            font: {
              size: 14,
            },
            padding: 20,
          },
        },
       
      },
  };
  

  return (
    <div style={{  height: "300px" }}>
      <Pie
        data={data}
        options={options}
      />
    </div>
  );
}
