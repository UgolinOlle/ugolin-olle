import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

import { ThemeContext } from '../libs/theme';

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2 flex items-center justify-center rounded dark:bg-gray-900">
      {theme === 'dark' ? (
        <BsFillSunFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-yellow dark:text-yellow text-2xl cursor-pointer"
        />
      ) : (
        <BsFillMoonStarsFill
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="text-dark dark:text-dark text-2xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;
