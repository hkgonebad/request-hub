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
              <Card.Body className="text-center">
                <div className="profile-avatar">
                  <img src={profile.avatar} alt={profile.name} />
                </div>
                <h3>{profile.name}</h3>
                <p className="text-muted">{profile.role}</p>
                <p className="text-muted">{profile.department}</p>
                <div className="profile-stats">
                  <div className="stat-item">
                    <h4>42</h4>
                    <p>Total Requests</p>
                  </div>
                  <div className="stat-item">
                    <h4>28</h4>
                    <p>Completed</p>
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
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Role</Form.Label>
                      <Form.Control type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} disabled={!isEditing} />
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Department</Form.Label>
                      <Form.Control type="text" value={formData.department} onChange={(e) => setFormData({ ...formData, department: e.target.value })} disabled={!isEditing} />
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
