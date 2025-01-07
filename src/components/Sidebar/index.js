import React from 'react';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectLanguage } from '../../state/settingsSlice';

function Sidebar() {
  // const [language, setLanguage] = useState("English");
  const language = useSelector((state) => state.settings.selectedLanguage);
  const dispatch = useDispatch();

  return (
    <div className='sidebar'>
      <h2>背单词</h2>
      <ul>
        {[
          { id: 'English', label: '🇬🇧 英语' },
          { id: 'Spanish', label: '🇪🇸 西语 ' },
        ].map((lang) => (
          <li
            onClick={() => dispatch(selectLanguage(lang.id))}
            className={language === lang.id ? 'active' : ''}
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
