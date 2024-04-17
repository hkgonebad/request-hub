import { FiEye, FiMessageSquare, FiTrash2 } from "react-icons/fi";
import Breadcrumbs from "../ExisitingForms/ui/Breadcrumbs";
import FormSearch from "../ExisitingForms/ui/FormSearch";

const RequestsPage = () => {
  return (
    <>
      <section className="block blockTitle">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              <Breadcrumbs bc={null} isActive={false} />

              <h2>My Requests</h2>
            </div>

            {/* Search */}
            <FormSearch />
          </div>
        </div>
      </section>

      {/* My Requests */}
      <section className="block">
        <div className="container">
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  {/*  */}
                  <th>Sr.No</th>
                  <th>Request ID</th>
                  <th>Raised By</th>
                  <th>Assigned to</th>
                  <th>Request Date</th>
                  <th>Status</th>
                  <th>Business Comments</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>RDRR1001</td>
                  <td>Priyanka Mohan</td>
                  <td>Shailesh Naik</td>
                  <td>07/01/2024</td>
                  <td>
                    <span className="badge bg-warning">In-Progress</span>
                  </td>
                  <td>N/A</td>
                  <td>
                    <div className="actions">
                      <a href="#!" className="btn btnView">
                        <FiEye />
                      </a>
                      <a href="#!" className="btn btnDelete">
                        <FiTrash2 />
                      </a>
                      <a href="#!" className="btn btnComments">
                        <FiMessageSquare />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>02</td>
                  <td>RDRR1002</td>
                  <td>Priyanka Mohan</td>
                  <td>Shailesh Naik</td>
                  <td>07/01/2024</td>
                  <td>
                    <span className="badge bg-success">Approved</span>
                  </td>
                  <td>Completed</td>
                  <td>
                    <div className="actions">
                      <a href="#!" className="btn btnView">
                        <FiEye />
                      </a>
                      <a href="#!" className="btn btnDelete">
                        <FiTrash2 />
                      </a>
                      <a href="#!" className="btn btnComments">
                        <FiMessageSquare />
                      </a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>03</td>
                  <td>RDRR1003</td>
                  <td>Priyanka Mohan</td>
                  <td>Shailesh Naik</td>
                  <td>07/01/2024</td>
                  <td>
                    {" "}
                    <span className="badge bg-danger">Rejected</span>
                  </td>
                  <td>Rejected</td>
                  <td>
                    <div className="actions">
                      <a href="#!" className="btn btnView">
                        <FiEye />
                      </a>
                      <a href="#!" className="btn btnDelete">
                        <FiTrash2 />
                      </a>
                      <a href="#!" className="btn btnComments">
                        <FiMessageSquare />
                      </a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestsPage;
