type HighlightProps = {
  children: React.ReactNode;
  className?: string;
};

function withExclamation(children: React.ReactNode): React.ReactNode {
  if (typeof children !== "string") {
    return children;
  }

  const trimmed = children.trimEnd();
  return trimmed.endsWith("!") ? children : `${trimmed}!`;
}

/** Playfair Display bold italic accent used inside headings. */
export default function Highlight({ children, className = "" }: HighlightProps) {
  return (
    <span className={`font-display font-bold italic ${className}`}>
      {withExclamation(children)}
    </span>
  );
}
