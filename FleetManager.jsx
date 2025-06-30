import React from "react";
import "../../App.css";
import Layout from "../../Components/Layout";
import { NavLink } from "react-router-dom";
import Profile1 from "../../assets/profilepics/profile1.png";
import Profile2 from "../../assets/profilepics/profile2.png";
import Profile3 from "../../assets/profilepics/profile3.png";
import Profile4 from "../../assets/profilepics/profile4.png";
import Profile5 from "../../assets/profilepics/profile5.png";
import Profile6 from "../../assets/profilepics/profile6.png";
const FleetManager = () => {
//   const navigate = useNavigate();
  return (
    <Layout>
      <div className="d-flex justify-content-between">
        <h1 className="fs-3 pb-4">Fleet Manager</h1>
        <div>
          {/* <NavLink to="/inprogress" className="btn btn-sm buttonstyle me-2">
            In Progress
          </NavLink> */}
          <NavLink to="/driverprofile"className="btn btn-sm buttonstyle">
            Add Driver
          </NavLink>
        </div>
      </div>
      {/* Your booking table or content */}
      <div>
        <div className="bookingtable" style={{ background: "#E0E0E0", padding: "2rem", borderRadius: "10px" }}>
          <table className="table bookingTableFont">
            <thead>
              <tr className="coloumn">
                <th scope="col"></th>
                <th scope="col">Email Address</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Vehicle Unit</th>
                <th scope="col">Assign VIN</th>
                {/* <th scope="col" className="descriptionCol">
                  Description
                </th> */}
                <th scope="col">Password</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <img
                    src={Profile1}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <td className="align-middle">testing@gmail.com</td>
                <td className="align-middle">+123 456 789</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                {/* <td className="align-middle descriptionCol">
                  This is demo code that is being used as description. Just
                  trying to test it out.</td> */}
                <td className="align-middle">abcd1234</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src={Profile2}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <td className="align-middle">testing@gmail.com</td>
                <td className="align-middle">+123 456 789</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                {/* <td className="align-middle descriptionCol">
                  This is demo code that is being used as description. Just
                  trying to test it out.
                </td> */}
                <td className="align-middle">abcd1234</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src={Profile3}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <td className="align-middle">testing@gmail.com</td>
                <td className="align-middle">+123 456 789</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                {/* <td className="align-middle descriptionCol">
                  This is demo code that is being used as description. Just
                  trying to test it out.
                </td> */}
                <td className="align-middle">abcd1234</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src={Profile4}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <td className="align-middle">testing@gmail.com</td>
                <td className="align-middle">+123 456 789</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                {/* <td className="align-middle descriptionCol">
                  This is demo code that is being used as description. Just
                  trying to test it out.
                </td> */}
                <td className="align-middle">abcd1234</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src={Profile5}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <td className="align-middle">testing@gmail.com</td>
                <td className="align-middle">+123 456 789</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                {/* <td className="align-middle descriptionCol">
                  This is demo code that is being used as description. Just
                  trying to test it out.
                </td> */}
                <td className="align-middle">abcd1234</td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src={Profile6}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  />
                </th>
                <td className="align-middle">testing@gmail.com</td>
                <td className="align-middle">+123 456 789</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                {/* <td className="align-middle descriptionCol">
                  This is demo code that is being used as description. Just
                  trying to test it out.
                </td> */}
                <td className="align-middle">abcd1234</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};
export default FleetManager;