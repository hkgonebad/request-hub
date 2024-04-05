import { Stack } from "react-bootstrap";
import { FiEdit2, FiMail, FiPhone, FiUser } from "react-icons/fi";

const ClientDetail = ({ clientDetails }: { clientDetails: any }) => {
  // console.log(clientDetails);
  return (
    <div className="clientDetail">
      <div className="row">
        <div className="col-md-4">
          {/* Actions */}
          <Stack className="cdAction ms-auto justify-content-end">
            <button className="btn text-success">
              Edit <FiEdit2 />
            </button>
          </Stack>

          {/* Client Detail Info */}
          <div className="cdInfo">
            <div className="cdiBox cdiLogo">
              <img src={clientDetails?.logo} alt="" />
            </div>
            <div className="cdiBox ">
              <FiUser />
              <h3>
                <span>User Type</span>
                {clientDetails?.type}
              </h3>
            </div>
            <div className="cdiBox ">
              <FiUser />
              <h3>
                <span>Customer ID</span>
                {clientDetails?.id}
              </h3>
            </div>
            <div className="cdiBox ">
              <FiPhone />
              <h3>
                <span>Contact Number</span>
                {clientDetails?.mobile}
              </h3>
            </div>
            <div className="cdiBox ">
              <FiMail />
              <h3>
                <span>Address</span>
                {clientDetails?.address}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
