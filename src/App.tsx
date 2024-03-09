import React, { useState } from 'react';
import Edit from './components/EditGenerator';
import Preview from './components/Preview';
import { MoonFilled } from '@ant-design/icons';

function App() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-[100%] p-3 h-full'>
      <div className='flex h-[2rem] ml-3 justify-between items-center mr-3'>
        <h2 className='text-[30px]'>HTML Div Style Manipulator</h2>
        <div className='flex w-[33px] h-[33px] rounded-full bg-[gray] justify-center items-center'>
          <MoonFilled
            className={`w-[15px] transition-transform ${
              isHovered ? 'translate-x-2' : ''
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        </div>
      </div>
      <p className='ml-3'>
        <i>Test your styles in real time</i>
      </p>
      <div className='flex w-full h-[500px] mt-5 gap-[1rem]'>
        <Edit />
        <Preview />
      </div>
    </div>
  );
}

export default App;
