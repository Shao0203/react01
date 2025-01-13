import { useTheme } from '../../context/ThemeContext';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      切换为 {theme === 'Light' ? 'Dark' : 'Light'} 主题
    </button>
  );
}

export default ThemeSwitcher;
