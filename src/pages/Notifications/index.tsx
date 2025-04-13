import { Card, Stack } from "react-bootstrap";
import { FiBell, FiCheck, FiTrash2 } from "react-icons/fi";
import useUserStore from "@/store/userStore";
import { format } from "date-fns";

const Notifications = () => {
  const { notifications, markNotificationAsRead, clearNotifications } = useUserStore();

  const handleMarkAsRead = (id: string) => {
    markNotificationAsRead(id);
  };

  return (
    <section className="block notifications">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Card>
              <Card.Body>
                <div className="blockHeader">
                  <div className="bhTitle">
                    <h2>
                      <FiBell className="me-2" />
                      Notifications
                    </h2>
                  </div>
                  <button className="btn btn-link text-danger" onClick={() => clearNotifications()}>
                    <FiTrash2 /> Clear All
                  </button>
                </div>

                <Stack gap={3}>
                  {notifications.length === 0 ? (
                    <div className="text-center py-5">
                      <FiBell size={48} className="text-muted mb-3" />
                      <h4>No Notifications</h4>
                      <p className="text-muted">You're all caught up! Check back later for new updates.</p>
                    </div>
                  ) : (
                    notifications.map((notification) => (
                      <div key={notification.id} className={`notification-item ${notification.read ? "read" : "unread"}`}>
                        <div className="notification-content">
                          <p>{notification.message}</p>
                          <small className="text-muted">{format(notification.timestamp, "PPp")}</small>
                        </div>
                        {!notification.read && (
                          <button className="btn btn-link" onClick={() => handleMarkAsRead(notification.id)}>
                            <FiCheck /> Mark as Read
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </Stack>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
