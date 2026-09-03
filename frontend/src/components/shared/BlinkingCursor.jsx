const BlinkingCursor = ({ className = '' }) => (
  <span
    aria-hidden="true"
    className={`inline-block text-brand-accent cursor-blink ${className}`}
  >
    ▊
  </span>
);

export default BlinkingCursor;
