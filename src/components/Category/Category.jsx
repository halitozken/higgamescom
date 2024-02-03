import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

import "./category.style.css";

import { categoryItems } from "./categoryItems";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <nav>
      <Swiper
        style={{
          "--swiper-navigation-color": "lightblue",
          "--swiper-pagination-color": "lightblue",
        }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={4}
        navigation
        rewind={true}
        className="swiper"
      >
        {categoryItems &&
          categoryItems.map((e) => (
            <SwiperSlide key={e.id} className="slider-item">
              <Link
                to={{
                  pathname: "/games",
                  search: `?category=${e.categoryName}&page=${1}`,
                }}
              >
                {e.categoryName.charAt(0).toUpperCase() +
                  e.categoryName.slice(1)}
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </nav>
  );
};

export default Category;
