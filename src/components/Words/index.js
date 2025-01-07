import React from "react";
import "./style.css";

function Words() {
  const words = {
    English: [
      { word: "hello", def: "你好", remembered: true },
      { word: "apple", def: "苹果", remembered: false },
      { word: "name", def: "名字", remembered: false },
    ],
    Spanish: [
      { word: "hola", def: "你好", remembered: false },
      { word: "manzana", def: "苹果", remembered: true },
      { word: "nombre", def: "名字", remembered: true },
    ],
  };

  return (
    <div className="words">
      {words["English"].map((word) => (
        <div key={word.word} className="wordCard">
          <h3>{word.word}</h3>
          <p>{word.def}</p>
          <button
            className={`${
              word.remembered ? "remembered" : "unremembered"
            } wordStatus`}
          >
            {word.remembered ? "已记" : "未记"}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Words;
