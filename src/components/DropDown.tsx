import React from 'react';
import { DropdownIcon } from '../assets/icons';

const Dropdown = () => {
  return (
    <div className='dropdown'>
      <input type='checkbox' id='dropdown'></input>
      <label className='dropdown__face' htmlFor='dropdown'>
        <div className='dropdown__text'>Dropdown</div>

        <div className='dropdown__arrow'></div>
      </label>
      <ul className='dropdown__items'>
        <li>🙂</li>
        <li>😺</li>
        <li>😽</li>
        <li>😎</li>
        <li>🤗</li>
      </ul>
      <DropdownIcon />
    </div>
  );
};

export default Dropdown;
