import React from "react";
import "./style.css";

function Actions() {
  return (
    <div className="actions">
      <input
        type="search"
        placeholder="请输入要搜索的单词"
        className="search"
      />
      <button>添加单词</button>
      <button className="reverse">A-Z</button>
      <form>
        <select name="" id="" defaultValue="">
          <option value="">全部</option>
          <option value="unremembered">未记住</option>
          <option value="remembered">已记住</option>
        </select>
      </form>
      <form className="addNewWordForm">
        <input type="text" placeholder="单词" />
        <input type="text" placeholder="释义" />
        <button type="submit">提交</button>
      </form>
    </div>
  );
}

export default Actions;
