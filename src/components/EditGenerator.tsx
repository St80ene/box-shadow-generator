import React, { useState } from 'react';
import Slider from './Slider';

const EditGenerator = () => {
  const [{}, setState] = useState({});
  return (
    <div className='w-full w-[30%] h-full border-[1px] ml-3 border-[gray] p-1'>
      <h3>Edit Options</h3>
      <Slider name='height' setValueState={setState} />
    </div>
  );
};

export default EditGenerator;
