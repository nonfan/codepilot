import style from "./index.module.css";

interface Props {
  title: string;
  direction: "left" | "right";
  width?: number;
}
function HomepageStartedSvg(props: Props) {
  return (
    <div
      className={style.container}
      style={{
        flexDirection: props.direction === "right" ? "row-reverse" : "unset",
      }}
    >
      <svg width={24} viewBox="0 0 1024 1024">
        <path
          d="M958.70539 62.365396 62.385351 367.92872l448.163089 140.925636 142.592602 449.830055L958.70539 62.365396zM958.70539 62.365396"
          fill="#272636"
        ></path>
      </svg>
      <div className={style.space}></div>
      <span>{props.title}</span>
    </div>
  );
}

export default HomepageStartedSvg;
