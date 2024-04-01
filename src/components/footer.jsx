import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-white'>
            <div className='xl:w-[1200px] m-auto pt-[50px] pr-5 pl-5 xl:pr-0 xl:pl-0'> 
                <div className='border-b border-black flex flex-col justify-between pb-[15px]'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-semibold'>Lumosites</h2>
                        <p className='md:w-[300px]'>We provide tailored website development services with a professional</p>
                        <button className='bg-[#6C9BFF] pl-6 pr-6 pt-2 pb-2 rounded-[6px] text-white w-[max-content]'>Learn more</button>
                    </div>
                    <div className='flex flex-col justify-between '>
                        <div className='flex flex-col items-end'>
                            <div className='bg-[#6c9bff54]'>+62 8930 2934 123</div>
                            <div>lumosites@gmail.com</div>
                        </div>
                        <ul className='flex gap-5 font-bold mt-11 md:mt-0'>
                            <li>About</li>
                            <li>Privacy policy</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between pt-6 pb-6'>
                    <span className='text-[14px]'>© 2023 LumoSites™. All Rights Reserved.</span>
                    <div className='flex gap-4'>
                        <div className='w-9 h-9 bg-black'></div>
                        <div className='w-9 h-9 bg-black'></div>
                        <div className='w-9 h-9 bg-black'></div>
                    </div>
                </div>

            </div>
        </footer>
  )
}
