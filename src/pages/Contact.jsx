import React from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Contact() {
  return (
    <>
        <Header />
        <section className='flex flex-col xl:w-[1200px] m-auto md:mt-[70px] pb-[90px]'>
            <div className='flex w-full justify-around md:text-start text-center'>
                <div className='pt-[80px]'>
                    <h1 className='md:text-[70px] text-[340%] font-bold mb-2 text-[#6C9BFF] md:w-[430px] bg-red leading-[75px]'>
                        <span className='text-[#1B325B]'>Where to</span>
                        <span className='text-[#6C9BFF]'> contact</span>
                        <span className='text-[#1B325B]'> us?</span>
                    </h1>
                </div>
                <div className='md:w-[373px] md:block hidden'>
                    <img src="/plane.png" alt="" />
                </div>
            </div>
        </section>

        <section className='xl:w-[1200px] m-auto  mt-[100px] mb-[100px] '>
            <div className='flex md:flex-row flex-col justify-around items-center md:items-start'>
                <div className='text-center md:text-start flex flex-col items-center md:items-start'>
                    <h2 className='font-bold text-[32px] md:w-[200px] text-[#1B325B] mb-2'>Leave a message</h2>
                    <p className='md:w-[300px] w-[80%]'>Our team is ready to assist you with any questions, provide further information, or help you get started.</p>
                </div>
                <form className='flex flex-col gap-3 md:mt-0 mt-[120px] w-[80%] md:w-auto'>
                    <h3 className='text-[#1B325B] font-bold text-[17px]'>Get in touch</h3>
                    <input type="text" placeholder='Name' className='bg-transparent border border-black h-[40px] pl-3 pr-3 rounded-lg md:w-[320px]'/>
                    <input type="text" placeholder='Email address'  className='bg-transparent border border-black h-[40px] pl-3 pr-3 rounded-lg md:w-[320px]'/>
                    <textarea cols="30" placeholder='Message' className='bg-transparent border border-black rounded-lg p-3 h-[150px]'></textarea>
                    <div className='flex flex-row-reverse'>
                        <button type='submit' className='bg-[#6C9BFF] text-white rounded-lg pr-5 pl-5 pt-1 pb-1'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='flex items-center mt-[100px] w-[80%] m-auto'>
                <div className='border-b border-black w-[50%]'></div>
                <span className='text-[19px] mr-2 ml-2'>or</span>
                <div className='border-b border-black w-[50%]'></div>
            </div>
        </section>


        <section className='flex flex-col md:flex-row items-center md:items-start gap-10 xl:w-[1200px] m-auto justify-center mb-[140px]'>
            <div className='flex items-center gap-2 border h-[120px] border-black rounded-md w-[max-content] pr-8 pl-8 '>
                <img src="./email.png" alt="" />
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>Email</h3>
                    <span className='xl:w-auto sm:block md:hidden lg:block'>Lumosites@gmail.com</span>
                </div>
            </div>
            <div className='flex items-center gap-2 border h-[120px] border-black rounded-md w-[max-content] pr-8 pl-8 '>
                <img src="./whatsapp.png" alt="" />
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>Whatsapp</h3>
                    <span className='xl:w-auto sm:block md:hidden lg:block'>Lumosites@gmail.com</span>
                </div>
            </div>
            <div className='flex items-center gap-2 border h-[120px] border-black rounded-md w-[max-content] pr-8 pl-8 '>
                <img src="./email.png" alt="" />
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>Email</h3>
                    <span className='xl:w-auto sm:block md:hidden lg:block'>Lumosites@gmail.com</span>
                </div>
            </div>
        </section>

        <Footer />
    </>
  )
}
