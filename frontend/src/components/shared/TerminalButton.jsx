const TerminalButton = ({
  children,
  variant = 'secondary',
  href,
  className = '',
  ...props
}) => {
  const classes = [
    'terminal-button',
    `terminal-button-${variant}`,
    className,
  ].join(' ');
  const content = (
    <>
      <span className="terminal-button-bracket">[</span>
      <span>{children}</span>
      <span className="terminal-button-bracket">]</span>
    </>
  );

  if (href) {
    return <a href={href} className={classes} {...props}>{content}</a>;
  }

  return <button className={classes} {...props}>{content}</button>;
};

export default TerminalButton;
