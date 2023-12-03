import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import img1 from '../../../assets/feature/agent1.jpg'
import img2 from '../../../assets/feature/agent2.jpg'
import img5 from '../../../assets/feature/agent5.jpg'
import img3 from '../../../assets/feature/agent3.jpg'
import img4 from '../../../assets/feature/agent4.jpg'

import img6 from '../../../assets/feature/agent6.jpg'


const FeaturedProperty = () => {
    return (
        <section>
            <SectionTitle heading='Our Agent'>
            </SectionTitle>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='text-center md:text-xl text-xs text-white -mt-20 uppercase'>Scotl Goodwin</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='text-center md:text-xl text-xs text-white -mt-20 uppercase'>Melvin Blackwell</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='text-center md:text-xl text-xs text-white -mt-20 uppercase'>Alayna Becker</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='text-center md:text-xl text-xs text-white -mt-20 uppercase'>David Backham</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='text-center md:text-xl text-xs text-white -mt-20 uppercase'>Ben Shneiderman</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img6} alt="" />
                    <h3 className='text-center md:text-xl text-xs text-white -mt-20 uppercase'>Erika Tillman</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default FeaturedProperty;