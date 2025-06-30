import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function StatisticsChart() {
  const data = {
    labels: ["Online Barber", "Offline Barber"],
    datasets: [
      {
        label: "Bookings Overview",
        data: [80, 20],
        backgroundColor: ["#0D6EFD", "#198754"],
        borderColor: "#fff",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          boxWidth: 20,
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="card border-0 p-3 h-100">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <div>
          <h5 className="fs-5 mb-1">Statistics</h5>
          <p className="fs-3 mb-0 mt-1 fw-bold" style={{ color: "#6DD3FF" }}>
            6.4K
          </p>
        </div>
        <select
          className="form-select form-select-sm"
          style={{ width: "auto", marginLeft: "20px" }}
        >
          <option>Last 7 Days</option>
        </select>
      </div>

      <div className="position-relative" style={{ height: "200px" }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
