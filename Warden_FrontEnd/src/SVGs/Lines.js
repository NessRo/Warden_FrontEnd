

function ConnectorLines() {
    return (
      <div>
        <svg width="100%" viewBox="0 0 100 100">
        {/* Draw the line */}
        <line x1="10" y1="50" x2="90" y2="50" fill="none" stroke="black" strokeWidth="1" />

        {/* Draw the circles at the ends of the line */}
        <circle cx="10" cy="50" r="2" fill="#0d6efd" stroke="black" strokeWidth="1"  />
        <circle cx="90" cy="50" r="2" fill="#0d6efd" stroke="black" strokeWidth="1" />
      </svg>
      </div>
    );
  }
  
  export default ConnectorLines;
  