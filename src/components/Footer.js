import React from 'react';
import { AiFillLinkedin, AiOutlineInstagram, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='w-full bg-black bottom-0'>
      <p className='text-white text-xl flex justify-center py-6'>
        Design and Build by <span className='text-red-500 font-bold pl-2'>Deepak Maurya</span>
      </p>
      <div className='flex justify-center py-3'>
        <p className='text-white'>Follow me on social media :</p>
        <div className='flex '>
          <a href="https://www.linkedin.com/in/deepak-maurya-374222237/" rel='noreferrer' target='_blank'>
            <button className='text-white text-2xl px-2'>
              <AiFillLinkedin />
            </button>
          </a>
          <a href='https://www.instagram.com/deepak_maurya1064/' rel='noreferrer' target='_blank'>
            <button className='text-white text-2xl px-2'>
              <AiOutlineInstagram />
            </button>
          </a>
          <a href='https://github.com/DEEPAK1164' rel='noreferrer' target='_blank'>
            <button className='text-white text-2xl px-2'>
              <AiFillGithub />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
