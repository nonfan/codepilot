function TextSvg(props: any) {
  return (
    <svg viewBox="0 0 200 200" fill="currentColor" className="icon-svg">
      <text
        textAnchor="middle"
        alignmentBaseline="middle"
        dominantBaseline="middle"
        x="50%"
        y="50%"
      >
        <tspan
          fontSize="60"
          fill="currentColor"
          opacity="1"
          fontFamily="宋体"
          fontWeight="Bold"
          letterSpacing="0"
        >
          {props.text}
        </tspan>
      </text>
    </svg>
  );
}

export default TextSvg;
