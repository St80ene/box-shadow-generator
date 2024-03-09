import React, { memo, useState } from 'react';

interface SliderProps {
  name: string;
  setValueState: React.Dispatch<React.SetStateAction<number>>;
}

const Slider: React.FC<SliderProps> = ({ name, setValueState }) => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('value', parseInt(event.target.value, 10));

    setSliderValue(parseInt(event.target.value, 10));
  };

  return (
    <div className='w-full flex justify-center items-center gap-3 h-[100px] border-[1px] border-[gray]'>
      <p className='capitalize'>{name}</p>
      <input
        type='range'
        min='0'
        max='100'
        value={sliderValue}
        onChange={handleSliderChange}
        className='w-[80%]'
      />
      <p className=''>{sliderValue}</p>
    </div>
  );
};

export default memo(Slider);
