import React from "react";
import "../../App.css";
import Layout from "../../Components/Layout";
import Profile1 from "../../assets/profilepics/profile1.png";
import Profile2 from "../../assets/profilepics/profile2.png";
import Profile3 from "../../assets/profilepics/profile3.png";
import Profile4 from "../../assets/profilepics/profile4.png";
import Profile5 from "../../assets/profilepics/profile5.png";
import Profile6 from "../../assets/profilepics/profile6.png";

const InProgress = () => {
  return (
    <Layout>
        <div className="d-flex justify-content-between">
      <h1 className="fs-3 pb-4">In Progress</h1>
      <div>
        {/* <button type="button" class="btn btn-sm buttonstyle me-2">In Progress</button>
        <button type="button" class="btn btn-sm buttonstyle">Completed</button> */}
        </div>
      </div>
      {/* Your booking table or content */}
      <div>
        <div className="bookingtable">
          <table className="table bookingTableFont">
            <thead>
              <tr className="coloumn">
                <th scope="col"></th>
                <th scope="col">Username</th>
                <th scope="col">Arrival Time</th>
                <th scope="col">Date</th>
                <th scope="col">Day</th>
                <th scope="col" className="descriptionCol">Description</th>
                <th scope="col">Services</th>
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
                <td className="align-middle">Mark</td>
                <td className="align-middle">09:00am</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just trying to test it out.</td>
                <td className="align-middle">Standard Haircut</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src={Profile2}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  /></th>
                <td className="align-middle">Jacob</td>
                <td className="align-middle">09:00am</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just trying to test it out.</td>
                <td className="align-middle">Standard Haircut</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src={Profile3}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  /></th>
                <td className="align-middle">John</td>
                <td className="align-middle">09:00am</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just trying to test it out.</td>
                <td className="align-middle">Standard Haircut</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src={Profile4}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  /></th>
                <td className="align-middle">Kelly</td>
                <td className="align-middle">09:00am</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just trying to test it out.</td>
                <td className="align-middle">Standard Haircut</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src={Profile5}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  /></th>
                <td className="align-middle">Joseph</td>
                <td className="align-middle">09:00am</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just trying to test it out.</td>
                <td className="align-middle">Standard Haircut</td>
              </tr>
              <tr>
                <th scope="row"><img
                    src={Profile6}
                    alt="Profile"
                    width={45}
                    height={45}
                    style={{ borderRadius: "50%" }}
                  /></th>
                <td className="align-middle">Victor</td>
                <td className="align-middle">09:00am</td>
                <td className="align-middle">Oct 5, 2022</td>
                <td className="align-middle">Monday</td>
                <td className="align-middle descriptionCol">This is demo code that is being used as description. Just trying to test it out.</td>
                <td className="align-middle">Standard Haircut</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default InProgress;
