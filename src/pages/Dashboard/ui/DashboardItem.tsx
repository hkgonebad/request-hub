const DashboardItem = ({ type, value, text }: { type: string; value: number; text: string }) => {
  const getColorClass = () => {
    switch (type) {
      case "primary":
        return "bg-primary dItemBg";
      case "success":
        return "bg-success dItemBg";
      case "danger":
        return "bg-danger dItemBg";
      default:
        return "";
    }
  };

  return (
    <div className={`dItem ${type === "alt" ? "dItemAlt" : ""} ${getColorClass()}`}>
      <h4>{value}</h4>
      <p>{text}</p>
      {type === "alt" && (
        <div className="diText">
          <h3>Download</h3>
          <span>Entire History Log Report</span>
        </div>
      )}
    </div>
  );
};

export default DashboardItem;
