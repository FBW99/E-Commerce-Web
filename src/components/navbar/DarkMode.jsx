
import React from 'react';
import LightButton from '../../assets/website/lightmode.png';
import NightButton from '../../assets/website/nightsmode.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
  });

  React.useEffect(() => {
    const isDark = theme === 'dark';

    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'light' ? 'dark' : 'light'
    );
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={toggleTheme}
        type="button"
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        className="relative flex h-10 w-10 items-center justify-center
          cursor-pointer rounded-full
          transition-colors duration-300
          hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <img
          src={theme === 'dark' ? NightButton : LightButton}
          alt=""
          className="h-8 w-8 object-contain transition-opacity duration-300"
        />
      </button>
    </div>
  );
};

export default DarkMode;
