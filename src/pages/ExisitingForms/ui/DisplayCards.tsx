import { Card } from "react-bootstrap";
import { FiChevronRight, FiShield } from "react-icons/fi";

// Interfaces
import { DisplayCardsProps, BusinessUnit, SubBusinessUnit } from "@/models/interfaces";

const DisplayCards = ({
  items,
  onClick,
  isSelected,
  onSubItemClick,
}: DisplayCardsProps & {
  onSubItemClick?: (subItem: SubBusinessUnit) => void;
}) => {
  const handleClick = () => {
    if (onSubItemClick && !isBusinessUnit(items)) {
      onSubItemClick(items as SubBusinessUnit);
    } else {
      onClick();
    }
  };

  return (
    <Card className={`dc-card ${isSelected ? "selected" : ""}`} onClick={handleClick}>
      <Card.Body>
        <div className="card-image">
          <img src={items?.img} alt={items?.name} />
        </div>
        <Card.Title>{items?.name}</Card.Title>
        {!isBusinessUnit(items) && (
          <div className="card-subtitle">
            <FiShield className="icon" /> Mission Team
          </div>
        )}
      </Card.Body>
      {/* Display the footer only for BusinessUnit and not SubBusinessUnit */}
      {isBusinessUnit(items) && (
        <Card.Footer className="dc-footer">
          <p>
            Teams <span>{isBusinessUnit(items) ? items.subBusinessUnits?.length : ""}</span>
          </p>
          <FiChevronRight className="icon" />
        </Card.Footer>
      )}
    </Card>
  );
};

// Type guard function to check if the item is a BusinessUnit
const isBusinessUnit = (item: BusinessUnit | SubBusinessUnit): item is BusinessUnit => {
  return (item as BusinessUnit).subBusinessUnits !== undefined;
};

export default DisplayCards;
