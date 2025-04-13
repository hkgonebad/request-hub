import Breadcrumbs from "../../components/common/Breadcrumbs";
import RequestViewCard from "./RequestViewCard";
import RequestJourneyCard from "./RequestJourneyCard";

const ViewRequest = () => {
  return (
    <>
      <section className="block blockTitle">
        <div className="container">
          {/* Block Header */}
          <div className="blockHeader">
            <div className="bhTitle">
              <Breadcrumbs bc={null} isActive={true} backBtn={true} />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Details */}
      <section className="block request pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <RequestViewCard />
            </div>

            <div className="col-md-4">
              <RequestJourneyCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewRequest;
