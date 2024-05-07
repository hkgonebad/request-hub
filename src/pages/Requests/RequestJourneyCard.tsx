const RequestJourneyCard = () => {
  return (
    <div className="card rj-card requestJourney">
      <div className="card-header">
        <h4>Request Journey</h4>
      </div>
      <div className="card-body">
        <div className="rjStep">
          <b>01</b>
          <h4>Request Received On</h4>
          <p>1st Jan 2024 | 13:24:00 PM</p>
          <span>Raised By : Sudeep Krishnan</span>
        </div>
        <div className="rjStep">
          <b>02</b>
          <h4>DPO / Privacy Team Assigned</h4>
          <p>1st Jan 2024 | 09:30:00</p>
          <span>Request Assigned to : Amit Ray</span>
        </div>
        <div className="rjStep">
          <b>03</b>
          <h4>Update by DPO / Privacy Team</h4>
          <p>3rd Jan 2024 | 09:30:00 AM</p>
          <span>Raised By : Sudeep Krishnan</span>
        </div>
        <div className="rjStep">
          <b>04</b>
          <h4>Request Completed</h4>
          <p>3rd Jan 2024 | 09:30:00 AM</p>
          <span>Completed By : Amit Ray</span>

          <div className="rjStatus">
            <h4>Status</h4>
            <span className="text-warning">Send to Legal Team & BIRM Comments</span>
          </div>
        </div>

        <div className="rjStep">
          <b>05</b>
          <h4>Request Closed</h4>
          <p>3rd Jan 2024 | 09:30:00 AM</p>
          <span>Closed By : Amit Ray</span>
          <div className="rjStatus">
            <h4>Status</h4>
            <span className="text-success">Approved</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestJourneyCard;
