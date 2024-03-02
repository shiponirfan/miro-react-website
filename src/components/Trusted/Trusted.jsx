import { Swiper, SwiperSlide } from "swiper/react";
import { trustedData } from "../../data/trustedData";
import { Autoplay } from "swiper/modules";

const Trusted = () => {
  return (
    <div className="container mx-auto px-4 text-center py-14">
      <h2 className="text-lg text-secondary-text font-normal">
        Trusted by 45M+ users
      </h2>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        className="mySwiper mt-12"
      >
        {trustedData?.map((img) => (
          <SwiperSlide
            key={img._id}
            className="flex justify-center items-center"
          >
            <img src={img.image} alt="Trusted Brand" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Trusted;
