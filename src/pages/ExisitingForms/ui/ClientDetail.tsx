import { SubBusinessUnit } from "@/models/interfaces";
import { Col, Form, Row, Stack } from "react-bootstrap";
import { FiEdit2, FiTrash2, FiUploadCloud, FiUser, FiXCircle, FiMapPin, FiCalendar, FiClock, FiShield, FiAlertTriangle } from "react-icons/fi";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

const ClientDetail = ({ clientDetails }: { clientDetails: SubBusinessUnit }) => {
  // console.log(clientDetails);

  // Dropzone
  const [files, setFiles] = useState<{ file: File; name: string }[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      const updatedFiles = acceptedFiles.map((file) => ({ file, name: file.name }));
      setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);
    },
  });

  // Remove uploaded file
  const handleRemoveFile = (nameToRemove: string) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== nameToRemove));
  };

  return (
    <div className="clientDetail">
      <div className="row">
        <div className="col-md-4">
          {/* Actions */}
          <Stack className="cdAction ms-auto justify-content-end" direction="horizontal">
            <button className="btn btn-link text-success">
              Edit <FiEdit2 className="icon" />
            </button>
          </Stack>

          {/* Mission Detail Info */}
          <div className="cdInfo">
            <div className="cdiBox cdiLogo">
              <img src={clientDetails?.img} alt="" />
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiShield className="icon" />
              </i>
              <h3>
                <span>Mission Type</span>
                {clientDetails?.type || "Combat"}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiUser className="icon" />
              </i>
              <h3>
                <span>Mission ID</span>
                {clientDetails?.id || "M-2024-0422"}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiAlertTriangle className="icon" />
              </i>
              <h3>
                <span>Threat Level</span>
                {clientDetails?.mobile || "Level 3 - Major Threat"}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiMapPin className="icon" />
              </i>
              <h3>
                <span>Location</span>
                {clientDetails?.address || "New York City"}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiCalendar className="icon" />
              </i>
              <h3>
                <span>Launch Date</span>
                {clientDetails?.address || "April 22, 2024"}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiClock className="icon" />
              </i>
              <h3>
                <span>Estimated Duration</span>
                {clientDetails?.address || "48 hours"}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {/* Actions */}
          <Stack className="cdAction ms-auto justify-content-end" direction="horizontal">
            <button className="btn btn-link text-success">
              Edit Mission <FiEdit2 className="icon" />
            </button>
            <button className="btn btn-link text-danger">
              Cancel Mission <FiTrash2 className="icon" />
            </button>
          </Stack>

          {/* Mission Detail Form */}
          <div className="cdForm">
            <Form>
              <Row className="form-row">
                <Form.Group className="mb-3" as={Col} controlId="missionName">
                  <Form.Label>Mission Name</Form.Label>
                  <Form.Control type="text" placeholder="Mission Name" />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="missionPriority">
                  <Form.Label>Mission Priority</Form.Label>
                  <Form.Select name="missionPriority" className="form-select">
                    <option value="">Mission Priority</option>
                    <option value="one">Low</option>
                    <option value="two">Medium</option>
                    <option value="three">High</option>
                    <option value="four">Critical</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="missionComments">
                <Form.Label>Mission Objectives and Details</Form.Label>
                <Form.Control as="textarea" rows={6} placeholder="Mission Objectives and Details" />
              </Form.Group>

              {/* Dropzone */}
              <h4>Upload Mission Evidence and Intelligence</h4>
              <Form.Group controlId="missionUpload" {...getRootProps({ className: "dropzone mb-3" })}>
                <input {...getInputProps()} />
                <FiUploadCloud className="icon" />
                <p>
                  <span className="text-primary">Click to Upload</span> or Drag and Drop the file
                </p>
              </Form.Group>

              <Form.Group className="mb-3 uploadedFiles">
                {files.map(({ name }) => (
                  <span key={name}>
                    {name}
                    <i onClick={() => handleRemoveFile(name)}>
                      <FiXCircle className="icon" />
                    </i>
                  </span>
                ))}
              </Form.Group>

              <button type="submit" className="btn btn-primary">
                Launch Mission
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
