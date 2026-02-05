import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import img1 from "../assets/Gallery-1.png";
import img2 from "../assets/Gallery-2.png";
import img3 from "../assets/Gallery-3.png";
import img4 from "../assets/Gallery-4.png";
import img5 from "../assets/Gallery-5.png";
import img6 from "../assets/Gallery-6.png";
import img7 from "../assets/Gallery-7.png";
import img8 from "../assets/Gallery-8.png";
import img9 from "../assets/Gallery-9.png";
import img10 from "../assets/Gallery-10.png";
import img11 from "../assets/Gallery-11.png";
import img12 from "../assets/Gallery-12.png";
import "swiper/css";
import "swiper/css/pagination";

const galleryImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img12
];

const Gallery = () => {
    return (
        <>
            <div className='gallery-container container-xxl'>
                <div className='gallery-main'>
                    <div className='gallery-head'>
                        <h2>Gallery</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>
                    <div className="gallery-img">
                        <Swiper
                            modules={[Autoplay, Pagination]}
                            centeredSlides
                            loop
                            spaceBetween={10}
                            autoplay={{ delay: 2000 }}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                576: { slidesPerView: 2 },
                                768: { slidesPerView: 3 },
                                992: { slidesPerView: 4 },
                                1200: { slidesPerView: 5 },
                            }}
                        >
                            {galleryImages.map((img, index) => (
                                <SwiperSlide key={index}>
                                    <img src={img} className="img-fluid gallery-img" alt={`screen-${index}`} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Gallery