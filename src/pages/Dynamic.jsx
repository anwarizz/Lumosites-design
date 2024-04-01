import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Dynamic() {
  return (
    <>
     <Header />
     <section className='flex flex-col xl:w-[1200px] m-auto mt-5 pb-[90px] xl:pr-0 xl:pl-0 pr-5 pl-5'>
            <div className='flex w-full justify-around'>
                <div className='md:pt-[80px] pt-[10px] flex flex-col gap-4'>
                    <h1 className='md:text-[70px] text-[40px] font-semibold mb-2 text-[#6C9BFF] bg-red leading-[75px]'>
                        <span className='text-[#1B325B]'>Dynamic website</span>
                    </h1>
                    <p className='md:w-[420px] mb-2 text-[#1B325B] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquet pellentesque pharetra. Phasellus dapibus urna nec neque auctor imperdiet. Phasellus malesuada, erat ac maximus interdum, nunc quam dictum nisi, sit amet feugiat justo velit ut velit. Praesent at eros ultrices, vestibulum purus ornare, tincidunt tellus. Vestibulum</p>
                    <ul className='flex md:w-[400px] flex-wrap gap-5 mt-[30px]'>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Dynamic Website</li>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Visual branding blablabla</li>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Website development</li>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Lorem Ipsum dolor sit</li>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Lorem Ipsum dolor sit</li>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Lorem Ipsum dolor sit amet</li>
                        <li className='flex items-center gap-2'><div className='h-4 w-4 bg-[#A0E7FD] rounded-full'></div> Lorem Ipsum</li>
                    </ul>
                    <button className='bg-[#6C9BFF] text-white w-[max-content] pr-5 mt-5 pl-5 pt-2 pb-2 rounded-md'>Get started</button>
                </div>
                <div className='md:w-[373px]'>
                    <img src="/dynamic.png" alt="" />
                </div>
            </div>
            <div className='w-[800px] m-auto mt-[100px]'></div>
        </section>
        <Footer />
    </>
  )
}
