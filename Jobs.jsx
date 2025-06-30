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

const Jobs = () => {

  return (
    <Layout>
      <div className="container-fluid py-3 px-4" style={{ background: "#F7F8FA" }}>
      <div className="d-flex justify-content-between" >
        <h1 className="fs-3 pb-2">Jobs</h1>

        {/* Enable if you want the buttons */}
        {/* <div>
          <NavLink to="/inprogress" className="btn btn-sm buttonstyle me-2">
            View Details
          </NavLink>
          <NavLink to="/completed"className="btn btn-sm buttonstyle">
            Completed
          </NavLink>
        </div> */}
        
      </div>
      {/* Your table or content */}
      <div>
        <div className="bookingtable">
          <table className="table bookingTableFont ">
            <thead>
              <tr className="coloumn ">
                <th scope="col" className=""></th>
                <th scope="col" className="">Driver Name</th>
                <th scope="col" className="descriptionCol">Issue</th>
                <th scope="col">Machine</th>
                <th scope="col">Quot. Amount</th>
                <th scope="col" >
                  Status
                </th>
                <th scope="col">Action</th>
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
                <td className="align-middle">John Smith</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just
                  trying to test it out.</td>
                <td className="align-middle">Mark Willions</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">
                  Mechanic arriving
                </td>
                <td className="align-middle"><NavLink to="/JobDetails" className="btn btn-sm buttonstyle me-2" >
                  View Details
                  </NavLink></td>
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
                <td className="align-middle">John Smith</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just
                  trying to test it out.</td>
                <td className="align-middle">Mark Willions</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">
                  Mechanic arriving
                </td>
                <td className="align-middle"><NavLink to="/JobDetails" className="btn btn-sm buttonstyle me-2">
                  View Details
                  </NavLink></td>
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
                <td className="align-middle">John Smith</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just
                  trying to test it out.</td>
                <td className="align-middle">Mark Willions</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">
                  Mechanic arriving
                </td>
                <td className="align-middle">
                  <NavLink to="/JobDetails" className="btn btn-sm buttonstyle me-2">
                  View Details
                  </NavLink>
                </td>
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
                <td className="align-middle">John Smith</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just
                  trying to test it out.</td>
                <td className="align-middle">Mark Willions</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">
                  Mechanic arriving
                </td>
                <td className="align-middle"><NavLink to="/JobDetails" className="btn btn-sm buttonstyle me-2">
                  View Details
                  </NavLink></td>
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
                <td className="align-middle">John Smith</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just
                  trying to test it out.</td>
                <td className="align-middle">Mark Willions</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">
                  Mechanic arriving
                </td>
                <td className="align-middle"><NavLink to="/JobDetails" className="btn btn-sm buttonstyle me-2">
                  View Details
                  </NavLink></td>
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
                <td className="align-middle">John Smith</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just
                  trying to test it out.</td>
                <td className="align-middle">Mark Willions</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle ">
                  Mechanic arriving
                </td>
                <td className="align-middle"><NavLink to="/JobDetails" className="btn btn-sm buttonstyle me-2">
                  View Details
                  </NavLink></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Jobs;
