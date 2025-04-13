const RequestJourneyCard = () => {
  return (
    <div className="card rj-card requestJourney">
      <div className="card-header">
        <h4>Mission Timeline</h4>
      </div>
      <div className="card-body">
        <div className="rjStep">
          <b>01</b>
          <h4>Mission Requested</h4>
          <p>1st Jan 2024 | 13:24:00 PM</p>
          <span>Requested By: Nick Fury</span>
        </div>
        <div className="rjStep">
          <b>02</b>
          <h4>Hero Assigned</h4>
          <p>1st Jan 2024 | 09:30:00</p>
          <span>Assigned to: Iron Man</span>
        </div>
        <div className="rjStep">
          <b>03</b>
          <h4>Mission Planning</h4>
          <p>3rd Jan 2024 | 09:30:00 AM</p>
          <span>Updated By: Iron Man</span>
        </div>
        <div className="rjStep">
          <b>04</b>
          <h4>Mission In Progress</h4>
          <p>3rd Jan 2024 | 09:30:00 AM</p>
          <span>Status Updated By: Iron Man</span>

          <div className="rjStatus">
            <h4>Status</h4>
            <span className="text-warning">Awaiting S.H.I.E.L.D. Intelligence & Team Support</span>
          </div>
        </div>

        <div className="rjStep">
          <b>05</b>
          <h4>Mission Completed</h4>
          <p>3rd Jan 2024 | 09:30:00 AM</p>
          <span>Completed By: Iron Man</span>
          <div className="rjStatus">
            <h4>Status</h4>
            <span className="text-success">Mission Accomplished</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestJourneyCard;
