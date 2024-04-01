import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function About() {
  return (
    <>
      <Header />
      <section className="flex flex-col xl:w-[1200px] m-auto md:mt-[80px] md:pb-[190px] pb-[100px]">
        <div className="flex md:flex-row flex-col w-full justify-around items-center">
          <div className="pt-[80px]">
            <h1 className="md:text-[70px] text-[330%] text-center md:text-start font-bold mb-2 text-[#6C9BFF] md:w-[430px] bg-red leading-[75px]">
              <span className="text-[#1B325B]">What is</span>
              <span className="text-[#6C9BFF]"> Lumosites</span>
              <span className="text-[#1B325B]">?</span>
            </h1>
          </div>
          <div className="md:w-[353px] w-[93%] h-[200px] bg-[#6C9BFF] rounded-lg relative md:mt-0 mt-6">
            <div className="bg-black text-white rounded-lg md:absolute md:w-[400px] p-8 bottom-[20px] right-0">
              Lumosites is your trusted companion for building and maintaining
              websites. From creation to upkeep, we're here to make your online
              presence easy and impressive
            </div>
          </div>
        </div>
      </section>

      <section className="xl:w-[1200px] m-auto mb-[130px]">
        <h2 className="md:ml-[100px] ml-[6%] md:text-[42px] text-[30px] md:text-start font-bold md:w-[700px] w-[50%] text-[#1B325B] mb-[60px] mt-[100px]">
          Why should<span className="text-[#6C9BFF]"> Lumosites</span>?
        </h2>
        <div className="flex flex-col gap-[40px] items-center">
          <div className="justify-between rounded-lg border md:w-[84%] w-[92%] border-black flex p-6 pr-10 pl-10 gap-4 pb-10 ">
            <div className="md:w-[550px]">
              <h3 className="font-semibold text-[20px] mb-2">
                Domain & hosting
              </h3>
              <p>
                Get your website off the ground with a complimentary domain &
                hosting package! No need to worry about all technicalities –
                we’ve got you covered every step of the way.
              </p>
            </div>
            <img src="./www.png" className="md:w-[100px] md:h-auto h-[100px] md:block hidden" />
          </div>
          <div className="justify-between rounded-lg border md:w-[84%] w-[92%] border-black flex p-6 pr-10 pl-10 gap-4 pb-10  bg-[#6C9BFF] text-white">
            <div className="md:w-[550px]">
              <h3 className="font-semibold text-[20px] mb-2">
                Responsive Design
              </h3>
              <p>
                Say goodbye to awkward website views on mobile devices! Our
                designs are crafted to ensure that your site looks stunning and
                functions flawlessly across all screens, whether it's a desktop,
                smartphone, or tablet. Enjoy a seamless user experience that
                keeps your visitors engaged wherever they are
              </p>
            </div>
            <img src="./responsive.png" className="md:w-[100px] md:h-auto h-[100px] md:block hidden" />
          </div>
          <div className="justify-between rounded-lg border md:w-[84%] w-[92%] border-black flex p-6 pr-10 pl-10 gap-4 pb-10 ">
            <div className="md:w-[550px]">
              <h3 className="font-semibold text-[20px] mb-2">Free SSL</h3>
              <p>
                With our free SSL certificate, your website is not only
                protected from online threats, but it also adds that extra layer
                of trust and professionalism.
              </p>
            </div>
            <img src="./ssl.png" className="md:w-[120px] md:block hidden" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
