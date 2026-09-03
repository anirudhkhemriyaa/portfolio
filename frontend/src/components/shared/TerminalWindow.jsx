const TerminalWindow = ({
  title = '~/portfolio -- zsh',
  children,
  className = '',
  ambientGlow = false,
}) => (
  <div className={`terminal-window ${ambientGlow ? 'terminal-window-glow' : ''} ${className}`}>
    <div className="terminal-window-bar">
      <div className="terminal-window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <span className="terminal-window-title">{title}</span>
      <span className="terminal-window-spacer" aria-hidden="true" />
    </div>
    <div className="terminal-window-content">{children}</div>
  </div>
);

export default TerminalWindow;
