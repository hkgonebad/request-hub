import Breadcrumbs from "../../components/common/Breadcrumbs";
import FormSearch from "../ExisitingForms/ui/FormSearch";
import RequestList from "./RequestList";

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
      <section className="block pt-0">
        <div className="container">
          <RequestList />
        </div>
      </section>
    </>
  );
};

export default RequestsPage;
