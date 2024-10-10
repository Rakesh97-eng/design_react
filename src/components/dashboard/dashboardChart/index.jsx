import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function DashboardPieChart(props) {
  const { Data,title } = props;
  const chartRef = useRef(null);


  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current && chartRef.current.canvas) {
        const chart = chartRef.current.canvas;
        chart.style.width = '100%';
        chart.style.height = '100%';
        // chart.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: ["#1F37B3", "#29B2E8", "#D9D9D9"],
      },
    ],
  });
  const myPlugin = {
    id: "myPlugin",
    beforeDraw: (chart) => {
      const ctx = chart.ctx;
      const xCoor =
        chart.chartArea.left +
        (chart.chartArea.right - chart.chartArea.left) / 2;
      const yCoor =
        chart.chartArea.top +
        (chart.chartArea.bottom - chart.chartArea.top) / 2;
      ctx.save();
      ctx.font = "20px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(title, xCoor, yCoor);
      ctx.restore();
    },
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Doughnut
      ref={chartRef} 
        data={chartData}
        plugins={[myPlugin]}
        options={{
          legend: {
            display: false,
            labels: {
              
              usePointStyle: true //for style circle
            }
          },
          // aspectRatio: 1.2,
          maintainAspectRatio:false,
          onResize: (chartInstance) => {
            chartInstance.resize();
          },
          responsive: true,
          cutout: 100
        }}
      />
   </div>
  );
}
