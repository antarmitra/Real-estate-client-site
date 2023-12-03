import 'swiper/css';

import { Swiper, SwiperSlide } from 'swiper/react';

// import './style.css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import img1 from '../../../assets/banner/img1.jpg'
import img2 from '../../../assets/banner/img2.jpg'
import img3 from '../../../assets/banner/img3.jpg'



const Banner = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {/* slider-1 */}
                <div className=" relative w-ful">
                    <SwiperSlide >
                        <img className='w-full lg:h-[800px] md:h-[500px] h-[300px]' src={img1} alt="" />
                        <div className="absolute  lg:h-[700px] md:h-[500px] h-[300px] flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                            <h2 className="lg:text-5xl md:text-4xl text-lg font-bold text-white lg:ml-[480px] md:ml-[190px] ml-[100px]">Find Your Feature Home</h2>
                        </div>
                    </SwiperSlide>
                </div>

                {/* slider-2 */}
                <div className='w-full h-[680px] '>
                    <SwiperSlide>
                        <img className='w-full lg:h-[800px] md:h-[500px] h-[300px]' src={img2} alt="" />
                        <div className="absolute lg:h-[700px] md:h-[500px] h-[300px] flex items-center  left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                            <h2 className="lg:text-5xl md:text-4xl text-lg font-bold text-white lg:ml-[480px] md:ml-[190px] ml-[100px]">Find Your Feature Home</h2>
                        </div>
                    </SwiperSlide>
                </div>


                {/* slider-3 */}
                <div className='w-full h-[680px]'>
                    <SwiperSlide>
                        <img className='w-full lg:h-[800px] md:h-[500px] h-[300px]' src={img3} alt="" />
                        <div className="absolute lg:h-[700px] md:h-[500px] h-[300px] flex items-center left-0 top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                            <h2 className="lg:text-5xl md:text-4xl text-lg font-bold text-white lg:ml-[480px] md:ml-[190px] ml-[100px]">Find Your Feature Home</h2>
                        </div>
                    </SwiperSlide>
                </div>

            </Swiper >
        </div >
    );
};

export default Banner;





