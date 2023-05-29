const Badge = ({ setFormDisplay }) => {
  return (
    <div onClick={() => setFormDisplay(true)} className="panel-heading">
      Click to enter input content
    </div>
  );
};

export default Badge;
