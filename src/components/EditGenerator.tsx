import React, { memo, useState } from 'react';
import Slider from './Slider';

interface EditGeneratorProps {
  isDarkMode: boolean;
}

const EditGenerator: React.FC<EditGeneratorProps> = ({ isDarkMode }) => {
  const [state, setState] = useState({});

  return (
    <div
      className={`w-[30%] h-full border-[1px] p-1 ${
        isDarkMode ? 'border-gray bg-[black] text-white' : 'border-black'
      }`}
    >
      <h3 style={{ color: isDarkMode ? '#fff' : '#000' }}>Edit Options</h3>
      <Slider name='height' setValueState={setState} />
    </div>
  );
};

export default memo(EditGenerator);
