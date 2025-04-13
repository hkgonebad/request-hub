const RequestsTable = () => {
  return (
    <>
      {/* Table */}
      <div className="table-responsive ">
        <table className="table table-striped m-0">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Request ID</th>
              <th>Assigned To</th>
              <th>Start Date</th>
              <th>Deadline</th>
              <th>Days Left</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>STARK-1001</td>
              <td>Tony Stark</td>
              <td>05/15/2024</td>
              <td>05/22/2024</td>
              <td>3</td>
              <td>
                <span className="badge bg-warning">In-Progress</span>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>STARK-1002</td>
              <td>Pepper Potts</td>
              <td>05/10/2024</td>
              <td>05/17/2024</td>
              <td>0</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>STARK-1003</td>
              <td>Happy Hogan</td>
              <td>05/08/2024</td>
              <td>05/15/2024</td>
              <td>0</td>
              <td>
                <span className="badge bg-danger">Rejected</span>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>STARK-1004</td>
              <td>JARVIS</td>
              <td>05/05/2024</td>
              <td>05/12/2024</td>
              <td>0</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>STARK-1005</td>
              <td>Rhodey</td>
              <td>05/03/2024</td>
              <td>05/10/2024</td>
              <td>0</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <td>06</td>
              <td>STARK-1006</td>
              <td>Natasha Romanoff</td>
              <td>05/01/2024</td>
              <td>05/08/2024</td>
              <td>0</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RequestsTable;
