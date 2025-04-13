import { Card, Form, Stack } from "react-bootstrap";
import { FiEdit2, FiSave } from "react-icons/fi";
import useUserStore from "@/store/userStore";
import { useState } from "react";

const Profile = () => {
  const { profile, setProfile } = useUserStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(formData);
    setIsEditing(false);
  };

  return (
    <section className="block profile">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <Card className="profile-card">
              <Card.Body>
                <div className="text-center mb-4">
                  <div className="profile-avatar mb-3">
                    <img src={profile.avatar} alt={profile.name} className="rounded-circle img-thumbnail shadow" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                  </div>
                  <h2 className="fw-bold mb-1">{profile.name}</h2>
                  <p className="mb-2 badge bg-primary">{profile.role}</p>
                  <p className="text-muted mb-3">{profile.department}</p>
                  <div className="d-flex justify-content-center gap-4 profile-stats">
                    <div className="stat-item text-center p-3 rounded-3 bg-body-tertiary">
                      <h3 className="fw-bold mb-1">42</h3>
                      <p className="text-muted mb-0 small">Total Requests</p>
                    </div>
                    <div className="stat-item text-center p-3 rounded-3 bg-body-tertiary">
                      <h3 className="fw-bold mb-1">28</h3>
                      <p className="text-muted mb-0 small">Completed</p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-12 col-lg-8">
            <Card>
              <Card.Body>
                <div className="blockHeader">
                  <div className="bhTitle">
                    <h2>Profile Information</h2>
                  </div>
                  <button className="btn btn-link" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <FiSave /> : <FiEdit2 />}
                  </button>
                </div>

                <Form onSubmit={handleSubmit}>
                  <Stack gap={3}>
                    <Form.Group>
                      <Form.Label htmlFor="name">Full Name</Form.Label>
                      <Form.Control id="name" type="text" autoComplete="off" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label htmlFor="email">Email</Form.Label>
                      <Form.Control id="email" type="email" autoComplete="off" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label htmlFor="role">Role</Form.Label>
                      <Form.Control id="role" type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label htmlFor="department">Department</Form.Label>
                      <Form.Control id="department" type="text" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    {isEditing && (
                      <button type="submit" className="btn btn-primary">
                        Save Changes
                      </button>
                    )}
                  </Stack>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
