import React from "react";
import Layout from "../Components/Layout"
import Profile1 from "../assets/profilepics/Profile1.png";
import { FiCamera, FiUpload } from "react-icons/fi";
export default function DriverProfile() {
  return (
    <Layout>
      <div className="d-flex justify-content-center mt-4 mb-4">
        <div
          className="card p-4 shadow-sm"
          style={{
            width: "100%",
            maxWidth: "500px",
            border: "none",
            borderRadius: "16px",
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="m-0 fw-bold">Add Driver</h5>
            <a
              href="#"
              className="text-danger text-decoration-none fw-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Skip for now
            </a>
          </div>
          <div className="text-center mb-3">
            <div className="position-relative d-inline-block">
              <img
                src={Profile1}
                alt="Driver"
                className="rounded-circle border border-2 border-danger"
                style={{ width: 100, height: 100, objectFit: "cover" }}
              />
              <div
                className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle p-1"
                style={{ border: "1px solid #ccc", cursor: "pointer" }}
              >
                <FiCamera color="orangered" />
              </div>
            </div>
            <p className="mt-2 text-muted small">Upload Driver Image</p>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label small">Driver Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Lorem ipsum"
              />
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label small">Driver Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Lorem ipsum dolor sit"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label small">Vehicle Unit</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Lorem ipsum"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label small">Driver Assign VIN</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="123456789"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label small">Account Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Loremipsum12345"
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label small">Driver License</label>
              <div
                className="border border-2 border-danger border-dashed rounded d-flex flex-column align-items-center justify-content-center"
                style={{ height: 120, backgroundColor: "#F8F9FA" }}
              >
                <FiUpload className="mb-1" color="orangered" size={20} />
                <span className="text-muted small">Upload Document</span>
              </div>
            </div>
            <div className="d-flex justify-content-between gap-2 mt-4">
              <button type="button" className="btn btn-outline-dark w-50">
                Add Another
              </button>
              <button
                type="submit"
                className="btn w-50 text-white"
                style={{ backgroundColor: "#0D1B4C" }}
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}