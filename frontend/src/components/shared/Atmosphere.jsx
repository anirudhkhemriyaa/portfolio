const Atmosphere = ({ className = '' }) => (
  <div className={`atmosphere ${className}`} aria-hidden="true">
    <div className="atmosphere-grid" />
    <div className="atmosphere-glow" />
    <div className="atmosphere-scanlines" />
  </div>
);

export default Atmosphere;
