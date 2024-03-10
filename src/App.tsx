import React, { useState } from 'react';
import Preview from './components/Preview';
import { MoonFilled, SunFilled } from '@ant-design/icons';
import Dropdown from './components/DropDown';
import EditGenerator from './components/EditGenerator';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`w-full p-3 h-full ${isDarkMode ? 'dark' : 'light'}`}>
      <div className='flex h-[2rem] ml-3 justify-between items-center mr-3'>
        <h2 className='text-[30px]'>HTML Div Style Manipulator</h2>
        <Dropdown />
        <div
          className={`flex w-[33px] h-[33px] rounded-full justify-center items-center cursor-pointer bg-[blue]`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <MoonFilled
              className={`w-[15px] text-[#e6e6e6] transition duration-500 ease-in-out transform hover:scale-125`}
            />
          ) : (
            <SunFilled className='w-[15px] text-yellow-400 transform transition duration-500 ease-in-out hover:rotate-180' />
          )}
        </div>
      </div>
      <p className='ml-3'>
        <i>Test your styles in real time</i>
      </p>
      <div className='flex w-full h-[500px] mt-5 gap-[3rem]'>
        <EditGenerator isDarkMode={isDarkMode} />
        <Preview isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
