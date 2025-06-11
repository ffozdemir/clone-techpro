import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import testimonialsData from "./testimonialsCardData.json";
import { TestimonialCard } from "./TestimonialCard";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export const Testimonials = () => {
  return (
    <Container className="mb-5 text-center testimonials-container">
      <h2 className="mb-5 text-primary fw-bold display-6">Testimonials</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              comment={testimonial.comment}
              stars={testimonial.stars}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
