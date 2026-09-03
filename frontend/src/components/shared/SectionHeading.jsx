import BlinkingCursor from './BlinkingCursor';

const SectionHeading = ({ command, className = '' }) => (
  <h2 className={`section-heading ${className}`}>
    <span className="text-brand-accent">$</span>
    <span>{command}</span>
    <BlinkingCursor />
  </h2>
);

export default SectionHeading;
