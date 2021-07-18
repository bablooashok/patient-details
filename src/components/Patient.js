const Patient = ({ patient }) => {
  return (
    <div className="patient">
      <h3>{patient.name}</h3>
      <p>{patient.desease}</p>
    </div>
  );
};

export default Patient;
