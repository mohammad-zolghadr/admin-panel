import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
};

defaults.font.family = "bf";

const AreaChart = (props) => {
  const data = props.data;
  return (
    <div className="w-full fcenter h-[350px]">
      <Line options={options} data={data} />
    </div>
  );
};

export default AreaChart;
