import React from 'react';
import './newsLetter.css'

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log(email);
  };

  return (
    <div className='bg text-center flex items-center justify-center px-4'>
      <div className='w-[500px]'>
        <h2 className='text-2xl font-semibold mt-40 md:mt-20 lg:mt-0'>NEWSLETTER </h2>
        <p className='text-slate-500 mt-5'>Subscribe to the weekly newsletter for all the latest updates</p>

        <form onSubmit={handleSubscribe} className='relative flex items-center mt-5'>
          <input type="email" name='email' className='border-2 border-slate-300 rounded-full w-full  px-4 py-3 focus:outline-2 focus:outline-[#6A802D] duration-500' placeholder='Your Email Address' required />
          <button className='absolute right-2 bg-[#8BA73B] hover:bg-[#6A802D] duration-500 text-white uppercase font-semibold px-6 py-2 rounded-full'>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;