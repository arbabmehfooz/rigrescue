import React from "react";
import Layout from "../../Components/Layout";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import Img from "../../assets/profilepics/profile1.png"; // example image

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default function Dashboard() {
  const doughnutData = {
    labels: ["Used", "Remaining"],
    datasets: [
      {
        data: [25, 75],
        backgroundColor: ["#F55227", "#1D2340"],
        borderWidth: 0,
      },
    ],
  };

  const doughnutOptions = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
    },
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "All Jobs",
        data: [40, 55, 30, 70, 50, 65, 60],
        fill: true,
        borderColor: "#F55227",
        backgroundColor: "rgba(245,82,39,0.1)",
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: "#eee" }, ticks: { beginAtZero: true } },
    },
  };

  const users = Array.from({ length: 7 }).map((_, i) => ({
    id: i,
    firstName: `Driver ${i + 1}`,
    email: `driver${i + 1}@email.com`,
    image: Img,
  }));

  return (
    <Layout>
      <div className="container-fluid px-4 py-3" style={{ background: "#F7F8FA" }}>
        <div className="row g-4 mb-3">
          {/* Total Drivers */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-danger">Total Drivers</h5>
                <select className="form-select w-auto bg-dark text-white form-select-sm">
                  <option>This Month</option>
                </select>
              </div>
              <div className="row align-items-center">
                <div className="col-sm-4 d-flex justify-content-center">
                  <div style={{ width: "100px" }}>
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                    <div className="text-center mt-2 fw-bold">25%</div>
                  </div>
                </div>
                <div className="col-sm-8">
                  <p><strong>2868</strong> <span className="text-danger">↓ 3%</span></p>
                  <p><strong>3422</strong> <span className="text-success">↑ 8%</span></p>
                  <p><strong>156</strong> <span className="text-warning">↑ 3%</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* All Jobs */}
          <div className="col-md-6">
            <div className="p-4 bg-white rounded-4 shadow-sm h-100">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 text-danger">All Jobs</h5>
                <select className="form-select w-auto bg-dark text-white form-select-sm">
                  <option>This Month</option>
                </select>
              </div>
              <Line data={lineData} options={lineOptions} height={93} />
            </div>
          </div>
        </div>

        {/* Registered Drivers */}
        <h5 className="mb-3 text-danger">Registered Drivers</h5>
        <div className="d-flex overflow-auto mb-4" style={{ gap: "1rem" }}>
          {users.map((user) => (
            <div
              key={user.id}
              className="text-center bg-white border p-3 rounded-3 shadow-sm flex-shrink-0"
              style={{ width: "240px", minWidth: "240px" }}
            >
              <img
                src={user.image}
                alt={user.firstName}
                className="rounded-circle mb-2"
                width="80"
                height="80"
              />
              <p className="mb-1 fw-bold text-danger">{user.firstName}</p>
              <p className="text-muted small mb-2">{user.email}</p>
              <button className="btn btn-sm btn-dark text-white">View Profile</button>
            </div>
          ))}
        </div>

        {/* Drivers Location */}
        <h5 className="text-danger">Drivers Location</h5>
        <div className="border rounded overflow-hidden" style={{ height: "300px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3151.835434509406!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1618367842780!5m2!1sen!2sus"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            title="Drivers Map"
          />
        </div>
      </div>
    </Layout>
  );
}
