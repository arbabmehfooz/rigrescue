import React from "react";
import "../../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import Layout from "../../Components/Layout";
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
import pro from "../../assets/product.png"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);
const Shopowner = () => {
  const navigate = useNavigate();

  
    const users = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      firstName: `Driver ${i + 1}`,
      email: `driver${i + 1}@email.com`,
      image: Img,
    }));

    const products = Array.from({ length: 7 }).map((_, i) => ({
      id: i,
      firstName: `product ${i + 1}`,
      quantity: "20Qty",
      detail : "Lorem epsum dolar sit amet dolar. Lorem epsum dolar sit amet dolar",
      image: pro,
    }));
  

  return (
    <Layout>
      <div className="container-fluid px-4 py-3" style={{ background: "#F7F8FA" }}>
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
                    <button className="btn btn-sm btn-dark text-white"
                    onClick={() => navigate("/DriverDetails")}
                    >View Profile</button>
                  </div>
                ))}
              </div>
              {/* Shop Products */}
              <h5 className="mb-3 text-danger">Shop Products</h5>
              <div className="d-flex overflow-auto mb-4" style={{ gap: "1rem" }}>
                {products.map((product) => (
                  <div
                    key={products.id}
                    className="text-center bg-white border p-3 rounded-3 shadow-sm flex-shrink-0"
                    style={{ width: "240px", minWidth: "240px" }}
                  >
                    <img
                      src={product.image}
                      alt={product.firstName}
                      className="mb-3"
                      width="200"
                      height="120"
                    />
                    <p className="mb-1 d-flex fw-bold text-danger">{product.firstName}</p>
                    <p className="text-muted d-flex small mb-2 ">{product.quantity}</p>
                    <p className="text-muted d-flex small mb-2 ">{product.detail}</p>
                    <button className="btn btn-sm btn-dark text-white"
                    onClick={() => navigate("/ProductDetails")}
                    
                    >View Product</button>
                  </div>
                ))}
              </div>
            </div>
    </Layout>
  );
};

export default Shopowner;
