import { SubBusinessUnit } from "@/models/interfaces";
import { Col, Form, Row, Stack } from "react-bootstrap";
import { FiEdit2, FiMail, FiPhone, FiTrash2, FiUploadCloud, FiUser, FiXCircle } from "react-icons/fi";
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

          {/* Client Detail Info */}
          <div className="cdInfo">
            <div className="cdiBox cdiLogo">
              <img src={clientDetails?.img} alt="" />
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiUser className="icon" />
              </i>
              <h3>
                <span>User Type</span>
                {clientDetails?.type}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiUser className="icon" />
              </i>
              <h3>
                <span>Customer ID</span>
                {clientDetails?.id}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiPhone className="icon" />
              </i>
              <h3>
                <span>Contact Number</span>
                {clientDetails?.mobile}
              </h3>
            </div>
            <div className="cdiBox ">
              <i className="cdiIcon">
                <FiMail className="icon" />
              </i>
              <h3>
                <span>Address</span>
                {clientDetails?.address}
              </h3>
            </div>
          </div>
        </div>

        <div className="col-md-8">
          {/* Actions */}
          <Stack className="cdAction ms-auto justify-content-end" direction="horizontal">
            <button className="btn btn-link text-success">
              Edit Form <FiEdit2 className="icon" />
            </button>
            <button className="btn btn-link text-danger">
              Delete Form <FiTrash2 className="icon" />
            </button>
          </Stack>

          {/* Client Detail Form */}
          <div className="cdForm">
            <Form>
              <Row className="form-row">
                <Form.Group className="mb-3" as={Col} controlId="cdName">
                  <Form.Control type="text" placeholder="Customer Name" />
                </Form.Group>

                <Form.Group className="mb-3" as={Col} controlId="cdAccess">
                  <Form.Select name="" className="form-select">
                    <option value="">Rights you want to access</option>
                    <option value="one">One</option>
                    <option value="two">Two</option>
                    <option value="three">Three</option>
                  </Form.Select>
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="cdComments">
                <Form.Control as="textarea" rows={6} placeholder="Customer Comments" />
              </Form.Group>

              {/* Dropzone */}
              <h4>Upload and attach Evidence</h4>
              <Form.Group controlId="cdUpload" {...getRootProps({ className: "dropzone mb-3" })}>
                <input className="" {...getInputProps()} />
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
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDetail;
