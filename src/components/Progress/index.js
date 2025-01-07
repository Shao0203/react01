import React from "react";
import "./style.css";

function Progress() {
  const remembered = 1;
  const remaining = 2;

  return (
    <div className="progress">
      <progress value={remembered} min={0} max={remembered + remaining} />
      <span>{(remembered / (remembered + remaining)).toFixed(2) * 100}%</span>
      <p>已记住：{remembered} 个</p>
      <p>剩余：{remaining} 个</p>
    </div>
  );
}

export default Progress;
