import React, { useState } from "react";
import "./style.css";

function Sidebar() {
  const [language, setLanguage] = useState("English");

  return (
    <div className="sidebar">
      <h2>背单词</h2>
      <ul>
        {[
          { id: "English", label: "🇬🇧 英语" },
          { id: "Spanish", label: "🇪🇸 西语 " },
        ].map((lang) => (
          <li
            onClick={() => setLanguage(lang.id)}
            className={language === lang.id ? "active" : ""}
            key={lang.id}
          >
            {lang.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
