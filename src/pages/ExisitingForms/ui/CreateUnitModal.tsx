import { Form, Modal, Stack, Tabs, Tab } from "react-bootstrap";
import { useState, ChangeEvent } from "react";

// Define the form data interfaces
export interface BaseFormData {
  name: string;
  description: string;
  logo: File | null;
  leader: string;
  location: string;
}

export interface MissionFormData extends BaseFormData {
  missionType: string;
  missionCategory: string;
  threatLevel: string;
  missionPriority: string;
  launchDate: string;
  estimatedDuration: string;
}

export interface TeamFormData extends BaseFormData {
  teamType: string;
  teamSize: string;
  specialization: string;
  equipment: string;
  trainingLevel: string;
  availability: string;
}

// Union type for all possible form data
export type FormData = MissionFormData | TeamFormData;

// Form type enum
export enum FormType {
  MISSION = "mission",
  TEAM = "team",
}

interface CreateUnitModalProps {
  show: boolean;
  onHide: () => void;
  title?: string;
  formType?: FormType;
  onSubmit?: (formData: FormData) => void;
}

const CreateUnitModal = ({ show, onHide, title = "Create New", formType = FormType.MISSION, onSubmit }: CreateUnitModalProps) => {
  // State for form type
  const [activeFormType, setActiveFormType] = useState<FormType>(formType);

  // Mission form state
  const [missionFormData, setMissionFormData] = useState<MissionFormData>({
    name: "",
    description: "",
    missionType: "",
    missionCategory: "",
    threatLevel: "",
    missionPriority: "",
    logo: null,
    leader: "",
    location: "",
    launchDate: "",
    estimatedDuration: "",
  });

  // Team form state
  const [teamFormData, setTeamFormData] = useState<TeamFormData>({
    name: "",
    description: "",
    teamType: "",
    teamSize: "",
    specialization: "",
    equipment: "",
    trainingLevel: "",
    logo: null,
    leader: "",
    location: "",
    availability: "",
  });

  const handleMissionChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMissionFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTeamChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTeamFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (activeFormType === FormType.MISSION) {
      setMissionFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    } else {
      setTeamFormData((prev) => ({
        ...prev,
        [name]: files ? files[0] : null,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      if (activeFormType === FormType.MISSION) {
        onSubmit(missionFormData);
      } else {
        onSubmit(teamFormData);
      }
    }
    onHide();
  };

  const handleTabChange = (k: string | null) => {
    if (k === FormType.MISSION) {
      setActiveFormType(FormType.MISSION);
    } else if (k === FormType.TEAM) {
      setActiveFormType(FormType.TEAM);
    }
  };

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={activeFormType} onSelect={handleTabChange} className="mb-3">
          <Tab eventKey={FormType.MISSION} title="Mission">
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <Form.Group controlId="missionName" className="mb-3">
                    <Form.Label htmlFor="missionName">Mission Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter mission name" name="name" value={missionFormData.name} onChange={handleMissionChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionDescription" className="mb-3">
                    <Form.Label htmlFor="missionDescription">Mission Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter mission description" name="description" value={missionFormData.description} onChange={handleMissionChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionType" className="mb-3">
                    <Form.Label htmlFor="missionType">Mission Type</Form.Label>
                    <Form.Select aria-label="Select mission type" name="missionType" value={missionFormData.missionType} onChange={handleMissionChange}>
                      <option value="">Select Type</option>
                      <option value="1">Rescue</option>
                      <option value="2">Combat</option>
                      <option value="3">Intelligence</option>
                      <option value="4">Defense</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionCategory" className="mb-3">
                    <Form.Label htmlFor="missionCategory">Mission Category</Form.Label>
                    <Form.Select aria-label="Select mission category" name="missionCategory" value={missionFormData.missionCategory} onChange={handleMissionChange}>
                      <option value="">Select Category</option>
                      <option value="1">Earth Defense</option>
                      <option value="2">Space Operations</option>
                      <option value="3">Multiverse Protection</option>
                      <option value="4">Special Investigations</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="threatLevel" className="mb-3">
                    <Form.Label htmlFor="threatLevel">Threat Level</Form.Label>
                    <Form.Select aria-label="Select threat level" name="threatLevel" value={missionFormData.threatLevel} onChange={handleMissionChange}>
                      <option value="">Select Threat Level</option>
                      <option value="1">Level 1 - Minor Threat</option>
                      <option value="2">Level 2 - Moderate Threat</option>
                      <option value="3">Level 3 - Major Threat</option>
                      <option value="4">Level 4 - Global Threat</option>
                      <option value="5">Level 5 - Multiversal Threat</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionPriority" className="mb-3">
                    <Form.Label htmlFor="missionPriority">Mission Priority</Form.Label>
                    <Form.Select aria-label="Select mission priority" name="missionPriority" value={missionFormData.missionPriority} onChange={handleMissionChange}>
                      <option value="">Select Priority</option>
                      <option value="1">Low</option>
                      <option value="2">Medium</option>
                      <option value="3">High</option>
                      <option value="4">Critical</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionLogo" className="mb-3">
                    <Form.Label htmlFor="missionLogo">Mission Logo</Form.Label>
                    <Form.Control type="file" name="logo" onChange={handleFileChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionLeader" className="mb-3">
                    <Form.Label htmlFor="missionLeader">Mission Leader</Form.Label>
                    <Form.Control type="text" placeholder="Enter mission leader name" name="leader" value={missionFormData.leader} onChange={handleMissionChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="missionLocation" className="mb-3">
                    <Form.Label htmlFor="missionLocation">Mission Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter mission location" name="location" value={missionFormData.location} onChange={handleMissionChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="launchDate" className="mb-3">
                    <Form.Label htmlFor="launchDate">Launch Date</Form.Label>
                    <Form.Control type="date" name="launchDate" value={missionFormData.launchDate} onChange={handleMissionChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="estimatedDuration" className="mb-3">
                    <Form.Label htmlFor="estimatedDuration">Estimated Duration</Form.Label>
                    <Form.Control type="text" placeholder="e.g., 48 hours" name="estimatedDuration" value={missionFormData.estimatedDuration} onChange={handleMissionChange} />
                  </Form.Group>
                </div>
              </div>

              <Stack direction="horizontal" gap={2} className="justify-content-end mt-3">
                <button type="button" className="btn btn-outline-danger" onClick={onHide}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Mission
                </button>
              </Stack>
            </Form>
          </Tab>
          <Tab eventKey={FormType.TEAM} title="Team">
            <Form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-4">
                  <Form.Group controlId="teamName" className="mb-3">
                    <Form.Label htmlFor="teamName">Team Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter team name" name="name" value={teamFormData.name} onChange={handleTeamChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="teamDescription" className="mb-3">
                    <Form.Label htmlFor="teamDescription">Team Description</Form.Label>
                    <Form.Control type="text" placeholder="Enter team description" name="description" value={teamFormData.description} onChange={handleTeamChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="teamType" className="mb-3">
                    <Form.Label htmlFor="teamType">Team Type</Form.Label>
                    <Form.Select aria-label="Select team type" name="teamType" value={teamFormData.teamType} onChange={handleTeamChange}>
                      <option value="">Select Type</option>
                      <option value="1">Special Forces</option>
                      <option value="2">Intelligence</option>
                      <option value="3">Medical</option>
                      <option value="4">Technical</option>
                      <option value="5">Support</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="teamSize" className="mb-3">
                    <Form.Label htmlFor="teamSize">Team Size</Form.Label>
                    <Form.Select aria-label="Select team size" name="teamSize" value={teamFormData.teamSize} onChange={handleTeamChange}>
                      <option value="">Select Size</option>
                      <option value="1">Small (2-5)</option>
                      <option value="2">Medium (6-10)</option>
                      <option value="3">Large (11-20)</option>
                      <option value="4">Extra Large (21+)</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="specialization" className="mb-3">
                    <Form.Label htmlFor="specialization">Specialization</Form.Label>
                    <Form.Select aria-label="Select specialization" name="specialization" value={teamFormData.specialization} onChange={handleTeamChange}>
                      <option value="">Select Specialization</option>
                      <option value="1">Combat</option>
                      <option value="2">Reconnaissance</option>
                      <option value="3">Cyber Security</option>
                      <option value="4">Medical</option>
                      <option value="5">Engineering</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="equipment" className="mb-3">
                    <Form.Label htmlFor="equipment">Equipment</Form.Label>
                    <Form.Select aria-label="Select equipment" name="equipment" value={teamFormData.equipment} onChange={handleTeamChange}>
                      <option value="">Select Equipment</option>
                      <option value="1">Standard</option>
                      <option value="2">Advanced</option>
                      <option value="3">Specialized</option>
                      <option value="4">Experimental</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="trainingLevel" className="mb-3">
                    <Form.Label htmlFor="trainingLevel">Training Level</Form.Label>
                    <Form.Select aria-label="Select training level" name="trainingLevel" value={teamFormData.trainingLevel} onChange={handleTeamChange}>
                      <option value="">Select Training Level</option>
                      <option value="1">Basic</option>
                      <option value="2">Intermediate</option>
                      <option value="3">Advanced</option>
                      <option value="4">Elite</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="teamLogo" className="mb-3">
                    <Form.Label htmlFor="teamLogo">Team Logo</Form.Label>
                    <Form.Control type="file" name="logo" onChange={handleFileChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="teamLeader" className="mb-3">
                    <Form.Label htmlFor="teamLeader">Team Leader</Form.Label>
                    <Form.Control type="text" placeholder="Enter team leader name" name="leader" value={teamFormData.leader} onChange={handleTeamChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="teamLocation" className="mb-3">
                    <Form.Label htmlFor="teamLocation">Team Location</Form.Label>
                    <Form.Control type="text" placeholder="Enter team location" name="location" value={teamFormData.location} onChange={handleTeamChange} />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="availability" className="mb-3">
                    <Form.Label htmlFor="availability">Availability</Form.Label>
                    <Form.Select aria-label="Select availability" name="availability" value={teamFormData.availability} onChange={handleTeamChange}>
                      <option value="">Select Availability</option>
                      <option value="1">Immediate</option>
                      <option value="2">24 Hours</option>
                      <option value="3">48 Hours</option>
                      <option value="4">1 Week</option>
                      <option value="5">On Call</option>
                    </Form.Select>
                  </Form.Group>
                </div>
              </div>

              <Stack direction="horizontal" gap={2} className="justify-content-end mt-3">
                <button type="button" className="btn btn-outline-danger" onClick={onHide}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Create Team
                </button>
              </Stack>
            </Form>
          </Tab>
        </Tabs>
      </Modal.Body>
    </Modal>
  );
};

export default CreateUnitModal;
