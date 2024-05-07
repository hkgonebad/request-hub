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
              <td>RDRR1001</td>
              <td>Amit Rane</td>
              <td>07/01/2024</td>
              <td>07/01/2024</td>
              <td>02</td>
              <td>
                <span className="badge bg-warning">In-Progress</span>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>RDRR1002</td>
              <td>Amit Rane</td>
              <td>07/01/2024</td>
              <td>07/01/2024</td>
              <td>02</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>RDRR1003</td>
              <td>Amit Rane</td>
              <td>07/01/2024</td>
              <td>07/01/2024</td>
              <td>02</td>
              <td>
                <span className="badge bg-danger">Rejected</span>
              </td>
            </tr>
            <tr>
              <td>04</td>
              <td>RDRR1004</td>
              <td>Amit Rane</td>
              <td>07/01/2024</td>
              <td>07/01/2024</td>
              <td>02</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <td>05</td>
              <td>RDRR1005</td>
              <td>Amit Rane</td>
              <td>07/01/2024</td>
              <td>07/01/2024</td>
              <td>02</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
            </tr>
            <tr>
              <td>06</td>
              <td>RDRR1006</td>
              <td>Amit Rane</td>
              <td>07/01/2024</td>
              <td>07/01/2024</td>
              <td>02</td>
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
