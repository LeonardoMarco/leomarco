type BlinkingFaceProps = {
  expression: "smile" | "grin";
};

export function BlinkingFace({ expression }: BlinkingFaceProps) {
  return (
    <svg
      className="blink-face"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g className="blink-face-eyes">
        <path d="M8 5v4M16 5v4" />
      </g>
      {expression === "grin" ? (
        <path d="M5 13h14c0 4-3 7-7 7s-7-3-7-7Z" />
      ) : (
        <path d="M5 14c3.5 5 10.5 5 14 0" />
      )}
    </svg>
  );
}
