import React, { useEffect, useRef, useState } from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/header'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faq from '../components/f';
import Footer from '../components/footer';

export default function Landing() {
    const faq = [
        {
            question: 'What types of websites can you create?',
            answer: 'We have the capability to create various types of websites, including static websites forsimpler needs, dynamic websites for more interactive experiences, and custom websites tailored to your specific requirements.'
        },
        {
            question: 'Do you provide website maintenance services after the site is launched?',
            answer: 'Yes, absolutely! We offer comprehensive website maintenance services to ensure that your site remains up-to-date, secure, and functioning smoothly even after it\'s launched. Our team is dedicated to providing ongoing support to keep your website running seamlessly'
        },
        {
            question: 'Can you help with website content creation?',
            answer: 'Of course! We understand the importance of engaging and relevant content for your website. Our team of experienced content creators can assist you in crafting compelling and informative content that resonates with your audience and aligns with your brand.'
        },
        {
            question: ' Is search engine optimization (SEO) included in your website services?',
            answer: 'Absolutely yes! We believe in maximizing the online visibility of your website. As part of our website services, we incorporate effective search engine optimization strategies to enhance your website\'s ranking and visibility on search engines, helping you reach your target audience more effectively.'
        }
    ]


    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: (current) => setCurrentSlide(current),
        customPaging: (index) => (
            <div
                className={`w-2 h-2 rounded-full bg-[#7DA8FF] m-2 transition-all duration-100 transform ${currentSlide === index ? 'scale-[1.7]' : 'scale-100'}`}
            />
        ),
        ref: sliderRef,
    }

    useEffect(() => {
        const interval = setInterval(() => {
          if (sliderRef.current) {
            sliderRef.current.slickNext();
          }
        }, 5000);
    
        return () => clearInterval(interval);
      }, []);
  return (
    <>
        <Header />
        <section className='flex flex-col xl:w-[1200px] xl:pr-0 xl:pl-0 pr-5 pl-5 m-auto mt-9 pb-[90px]'>
            <div className='flex w-full justify-around'>
                <div className='md:pt-[80px] pt-[60px] md:items-start flex flex-col items-center'>
                    <h1 className='md:text-[70px] text-[310%] text-center md:text-start font-bold mb-2 text-[#6C9BFF] md:w-[430px] w-full bg-red leading-[75px]'>
                        <span className='text-[#1B325B]'>Welcome to</span>
                        <span className='text-[#6C9BFF]'> Lumosites</span>
                    </h1>
                    <p className='md:w-[420px] w-[94%] text-center md:text-start mb-2 text-[#1B325B] '>We offer tailored website development services with a professional and innovative approach, crafting engaging, responsive, and modern sites.</p>
                    <Link to="#" className='text-[#6C9BFF] '>More about us👉</Link>
                </div>
                <div className='lg:w-[573px] hidden md:block'>
                    <img src="/main.png" alt="" />
                </div>
            </div>
            <div className='xl:w-[800px] border-b border-black m-auto mt-[100px]'></div>
        </section>

        
        <section className='xl:w-[1210px] pr-5 pl-5 xl:pr-0 xl:pl-0 rounded-2xl overflow-hidden pb-[45px] m-auto mb-[75px] h-[max-content]'>
            <Slider {...sliderSetting}>
                <div className='rounded-2xl bg-black overflow-hidden'>
                    <img src="/banner.png" alt="Banner 1" className='w-full'/>
                </div>
                <div className='rounded-2xl bg-black overflow-hidden'>
                    <img src="/banner.png" alt="Banner 2" className='w-full'/>
                </div>
                <div className='rounded-2xl bg-black overflow-hidden'>
                    <img src="/banner.png" alt="Banner 3" className='w-full'/>
                </div>
                <div className='rounded-2xl bg-black overflow-hidden'>
                    <img src="/banner.png" alt="Banner 4" className='w-full'/>
                </div>  
            </Slider>
        </section>

        {/* <div id="default-carousel" className="relative lg:w-[1200px] m-auto mb-[100px]" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <div className=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/banner.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/banner.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/banner.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div className=" duration-700 ease-in-out" data-carousel-item>
                    <img src="/banner.png" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                <button type="button" className="w-3 h-3 rounded-full bg-red-800" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-red-800" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-red-800" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full bg-red-800" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            </div>
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div> */}

        <section className='w-full'>
            <div className='xl:w-[1200px] m-auto mb-[90px] pr-5 pl-5 xl:pr-0 xl:pl-0'>
                <h1 className='md:text-[52px] text-[26px] w-[80%] font-semibold xl:w-[700px] text-[#1B325B]'>Delivering the following <span className='text-[#6C9BFF]'>services</span></h1>
            </div>
            <article className='mt-10 bg-[#E9F1FB] pt-14 md:pt-0 pb-14 md:pb-0'>
                <div className='xl:w-[1200px] m-auto flex justify-between items-center pr-6 pl-6'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='md:text-[38px] text-[18px] font-semibold'>Dynamic website</h2>
                        <p className='md:w-[380px]'>Our services offer a complete, high-quality solution to fulfill your every need.Our services offer a complete, high-quality solution to fulfill your every need.Our services offer a complete, high-quality.</p>
                        <Link to={'service/1'} className='relative bg-[#6C9BFF] pl-6 pr-6 pt-2 pb-2 rounded-[6px] text-white w-[max-content]'>Learn more</Link>
                    </div> 
                    <div>
                        <img src="/dynamic.png" className='w-[479px]' />
                    </div>
                </div>
            </article>
            <article className='mt-10 '>
                <div className='xl:w-[1200px] m-auto flex justify-between items-center pr-6 pl-6 flex-row-reverse'>
                    <div className='flex flex-col gap-4 ml-7 lg:mt-0'>
                        <h2 className='md:text-[38px] text-[18px] font-semibold'>Static website</h2>
                        <p className='md:w-[380px]'>Our services offer a complete, high-quality solution to fulfill your every need.Our services offer a complete, high-quality solution to fulfill your every need.Our services offer a complete, high-quality.</p>
                        <Link to={'service/2'} className='relative bg-[#6C9BFF] pl-6 pr-6 pt-2 pb-2 rounded-[6px] text-white w-[max-content]'>Learn more</Link>
                    </div> 
                    <div>
                        <img src="/static.png" className='w-[479px]' />
                    </div>
                </div>
            </article>
            <article className='md:mt-10  mt-16 bg-[#E9F1FB] pt-14 md:pt-0 pb-14 md:pb-0'>
                <div className='xl:w-[1200px] m-auto flex justify-between items-center pr-6 pl-6'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='md:text-[38px] text-[18px] font-semibold'>Custom website</h2>
                        <p className='md:w-[380px]'>Our services offer a complete, high-quality solution to fulfill your every need.Our services offer a complete, high-quality solution to fulfill your every need.Our services offer a complete, high-quality.</p>
                        <Link to={'service/3'} className='relative bg-[#6C9BFF] pl-6 pr-6 pt-2 pb-2 rounded-[6px] text-white w-[max-content]'>Learn more</Link>
                    </div> 
                    <div>
                        <img src="/custom.png" className='w-[479px]' />
                    </div>
                </div>
            </article>
        </section>

        <section className='xl:w-[1200px] m-auto mt-[95px] mb-[100px] pr-5 pl-5 xl:pr-0 xl:pl-0'>
            <h1 className='mb-[95px] md:text-[52px] text-[26px] font-semibold xl:w-[500px] text-[#1B325B]'>Frequently asked questions <span className='text-[#6C9BFF]'>(FAQ)</span></h1>
        
            <div className='flex flex-col gap-2'>
                {faq.map((f, index) => (
                    <Faq question={f.question} answer={f.answer}/>
                ))}
            </div>

            <div className='flex font-semibold mt-[60px]'>
                <p>Still not sure about us?</p>
                <Link to="#" className='ml-1 text-[#6C9BFF]'>Look at this!</Link>
            </div>
        </section>

        <Footer />

    </>
  )
}
