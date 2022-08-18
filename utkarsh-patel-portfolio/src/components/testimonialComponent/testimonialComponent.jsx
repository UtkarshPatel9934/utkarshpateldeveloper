import React from 'react'
// now importing the contact component css file
import './testimonialComponent.css'

import {testimonialContentArray} from '../../data/testimonialsData'

// Import Swiper React components
import { Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialComponent = () => {
  return (
    <section id="testimonial">
      <h4>Review from clients</h4>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container" 
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      scrollbar={{draggable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('Slide Change')}
      >
        {
          testimonialContentArray.map(({id, image, name, review}) => {
            return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt={name} />
              </div>
                <h3 className="client__name">{name}</h3>
                <small className='client__review'>
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonialComponent