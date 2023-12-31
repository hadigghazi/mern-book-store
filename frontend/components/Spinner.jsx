const Spinner = () => {
  const spinnerStyle = {
    width: "40px",
    height: "40px",
    position: "relative",
    margin: "0 auto",
  };

  const spinnerInnerStyle = {
    width: "100%",
    height: "100%",
    border: "4px solid rgba(0, 0, 0, 0.3)",
    borderTop: "4px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={spinnerStyle}>
      <div style={spinnerInnerStyle}></div>
    </div>
  );
};

export default Spinner;
