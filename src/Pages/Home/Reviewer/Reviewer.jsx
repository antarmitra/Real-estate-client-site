import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
// import { Rating } from "@smastrom/react-rating";
// import '@smastrom/react-rating/style.css'


const Reviewer = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <section className="my-20 max-w-screen-xl mx-auto">
            <SectionTitle heading="Latest Reviewer">

            </SectionTitle>
           
            <Swiper  navigation={true} modules={[Navigation]} className="mySwiper bg-slate-200">
                {
                    reviews.slice(0, 3).map(review => <SwiperSlide key={review._id}>
                        <div className="mx-24 my-16 flex flex-col items-center">
                            <img className='md:w-32 w-20 md:h-32 h-20 rounded-full' src={review.photo} alt="" />
                            <h2 className="md:text-3xl text-lg text-sky-500 ">{review.name}</h2>
                            <h3 className='md:text-2xl text-base'>{review.title}</h3>
                            <p className="py-4 md:text-xl text-base text-center">{review.description}</p>

                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </section>
    );
};

export default Reviewer;