import Ellipse from "../assets/background.jpg";
import productpic from "../assets/product.png";
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./Layout";
export default function JobDetails() {
//   const [showModal, setShowModal] = useState(false);
//   const [showModal2, setShowModal2] = useState(false);
  const navigate = useNavigate();
  const isSideBarOpen = useOutletContext();
  const { id } = useParams();
  const location = useLocation();
  const { job } = location.state || {};
  useEffect(() => {
    console.log("Job ID from URL:", id);
    console.log("Job from URL:", job);
    // Optionally fetch job details by ID here
  }, [id]);
  const handleMapClick = () => {
    navigate("/fleet/track-driver");
  };
//   const handleNavigate = () => {
//     navigate("/fleet/messages");
//   };
//   const handleShow2 = () => setShowModal2(true);
//   const handleHide2 = () => setShowModal2(false);
//   const handleConfirm = () => {
//     console.log("Allocated budget");
//     setShowModal2(false);
//   };
  const [lng, lat] = job?.location?.coordinates || [];
  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  return (
    <Layout>
    <div
      className={`content_section ${
        isSideBarOpen ? "" : "content_section_close"
      } p-4 home_page`}
      style={{ minHeight: "100vh" }}
    >
      <div className="p-4 rounded-3 shadow-sm" style={{ backgroundColor: "#E9E9E9" }}>
        <h5 className="mb-4 colorOrange fs-3">Job Details</h5>
        <div className="row">
          {/* Left Column */}
          <div className="col-md-6 mb-4">
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#F3F4F8", height: "600px" }}>
              <div className="d-flex align-items-center">
                <img
                  src={
                    job?.driverId?.image
                      ? `https://client1.appsstaging.com:3008/${job.driverId.image}`
                      : Ellipse
                  }
                  alt="Driver"
                  className="rounded-circle me-3"
                  style={{ width: "60px", height: "60px" }}
                />
                <div>
                  <h6 className="m-0 text-orange-custom">
                    {job?.driverId?.firstName} {job?.driverId?.lastName}
                  </h6>
                  <p className="mb-0 small">{job?.driverId?.email || "John Smith"}</p>
                  <p className="mb-0 fw-bold small">{job?.driverId?.phoneNumber || "0312345678"}</p>
                </div>
              </div>
              <div className="my-3">
                <h6>Issue</h6>
                <p className="small text-muted">
                  {job?.issueDescription || "No issue description provided"}
                </p>
              </div>
              <div className="d-flex justify-content-between mb-3">
                {(job?.issueImages || []).map((img, i) => (
                  <img
                    key={i}
                    src={`https://client1.appsstaging.com:3008/${img}`}
                    className="rounded-3 border border-warning"
                    style={{ width: "30%", objectFit: "cover" }}
                    alt={`Issue ${i + 1}`}
                  />
                ))}
              </div>
              <div onClick={handleMapClick}>
                <h6>Driver Location</h6>
                <div className="rounded overflow-hidden border border-warning">
                  <iframe
                    src={mapSrc}
                    width="100%"
                    height="180"
                    frameBorder="0"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex="0"
                    title="Map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          {/* Right Column */}
          <div className="col-md-6">
            <div className="p-4 rounded-4 shadow-sm" style={{ backgroundColor: "#F3F4F8", height: "600px" }}>
              <h4 className="mb-3 fw-semibold">Mechanic Details:</h4>
              <div className="d-flex justify-content-between small mb-2">
                <span>Mechanic:</span>

                <strong>
                  {job?.mechanicId?.fleetName ||
                    `${job?.mechanicId?.firstName || ""} ${job?.mechanicId?.lastName || ""}`}
                </strong>
              </div>
              <div className="d-flex justify-content-between small mb-2">
                <span>Email:</span>
                <strong>{job?.mechanicId?.email || "Mechanic@gmail.com"}</strong>
              </div>
              <div className="d-flex justify-content-between small mb-2">
                <span>Phone:</span>
                <strong>{job?.mechanicId?.phoneNumber || "0312345678"}</strong>
              </div>
              <div className="d-flex justify-content-between small mb-2">
                <span>Hourly Charges:</span>
                <strong>${job?.mechanicId?.hourlyRates || 69} Per hour</strong>
              </div>
              <div className="d-flex justify-content-between small mb-4">
                <span>Date & Time:</span>
                <strong>
                  {job?.createdAt ? new Date(job.createdAt).toLocaleString() : "N/A"}
                </strong>
              </div>
              <h5 className="mb-3">Products:</h5>
              {(job?.products || []).length > 0 ? (
                job.products.map((prod, i) => (
                  <div
                    key={i}
                    className="d-flex bg-light p-2 rounded-3 mb-3 align-items-center shadow-sm"
                  >
                    <img
                      src={productpic}
                      alt="product"
                      className="me-3 rounded"
                      style={{ width: "60px", height: "60px", objectFit: "cover" }}
                    />
                    <div>
                      <strong>{prod?.name || "Unnamed Product"}</strong>
                      <p className="mb-0 text-muted small">
                        ${prod?.price || "0.00"}
                      </p>
                      <p className="mb-0 text-muted small">
                        {prod?.description || "No description"}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted small">
                  No products attached to this job.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
}
