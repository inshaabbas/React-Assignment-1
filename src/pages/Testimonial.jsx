import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import testiImg1 from "../assets/Saul.jpg"
import testiImg2 from "../assets/Sara.jpg"
import testiImg3 from "../assets/Jena.jpg"
import testiImg4 from "../assets/Matt.jpg"
import testiImg5 from "../assets/John.jpg"

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    name: "Saul Goodman",
    role: "CEO & Founder",
    image: testiImg1,
    rating: 5,
    text:
      "Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit.",
  },
  {
    id: 2,
    name: "Sara Wilsson",
    role: "Designer",
    image: testiImg2,
    rating: 5,
    text:
      "Quisquam facilis cum velit laborum corrupti fuga rerum quia.",
  },
  {
    id: 3,
    name: "Jena Karlis",
    role: "Store Owner",
    image: testiImg3,
    rating: 5,
    text:
      "Enim nisi quem export duis labore cillum quae magna enim sint.",
  },
  {
    id: 4,
    name: "Jena Karlis",
    role: "Store Owner",
    image: testiImg4,
    rating: 5,
    text:
      "Enim nisi quem export duis labore cillum quae magna enim sint.",
  },
  {
    id: 5,
    name: "Jena Karlis",
    role: "Store Owner",
    image: testiImg5,
    rating: 5,
    text:
      "Enim nisi quem export duis labore cillum quae magna enim sint.",
  }
];


const Testimonial = () => {
  return (
    <>
    <div className='testimonial-section'>
        <div className='testimonial-head'>
            <h2>Testimonials</h2>
            <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='testimonial-cards'>
            <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
                <span>{item.role}</span>

                <div className="stars">
                  {"★".repeat(item.rating)}
                </div>

                <p className="testimonial-text">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </div>
    </>
  )
}

export default Testimonial