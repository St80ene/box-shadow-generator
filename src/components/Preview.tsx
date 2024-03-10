import React from 'react';

interface EditGeneratorProps {
  isDarkMode: boolean;
}

const Preview: React.FC<EditGeneratorProps> = ({ isDarkMode }) => {
  return (
    <div className='w-full w-[50%] h-full p-1'>
      <h3>Preview Page</h3>
    </div>
  );
};

export default Preview;
