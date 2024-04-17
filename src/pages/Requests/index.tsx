import { FiEye, FiTrash2 } from "react-icons/fi";
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

              <h2>Existing Forms</h2>
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
                  <th>Request ID</th>
                  <th>Request Type</th>
                  <th>Request Date</th>
                  <th>Requester</th>
                  <th>Request Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REQ-001</td>
                  <td>Business Approval</td>
                  <td>2021-09-01</td>
                  <td>John Doe</td>
                  <td>
                    <span className="badge badge-primary">Pending</span>
                  </td>
                  <td>
                    <a className="btn btn-link text-success">
                      <FiEye className="icon" /> View
                    </a>
                    <a className="btn btn-link text-danger">
                      <FiTrash2 className="icon" /> Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>REQ-002</td>
                  <td>Business Approval</td>
                  <td>2021-09-01</td>
                  <td>John Doe</td>
                  <td>
                    <span className="badge badge-success">Approved</span>
                  </td>
                  <td>
                    <a className="btn btn-link text-success">
                      <FiEye className="icon" /> View
                    </a>
                    <a className="btn btn-link text-danger">
                      <FiTrash2 className="icon" /> Delete
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>REQ-003</td>
                  <td>Business Approval</td>
                  <td>2021-09-01</td>
                  <td>John Doe</td>
                  <td>
                    <span className="badge badge-danger">Rejected</span>
                  </td>
                  <td>
                    <a className="btn btn-link text-success">
                      <FiEye className="icon" /> View
                    </a>
                    <a className="btn btn-link text-danger">
                      <FiTrash2 className="icon" /> Delete
                    </a>
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
