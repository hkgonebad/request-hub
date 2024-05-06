const DashboardReqCard = ({
  title,
  subTitle,
  value,
  alt,
}: {
  title: string;
  subTitle: string;
  value: string;
  alt: boolean;
}) => {
  return (
    <div className={`card dr-card ${alt ? "dr-cardAlt" : ""}`}>
      <div className="card-body">
        <h4>
          {title}
          <span>{subTitle}</span>
        </h4>
        <b>{value}</b>
      </div>
    </div>
  );
};

export default DashboardReqCard;
