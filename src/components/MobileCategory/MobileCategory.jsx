// Import Swiper React components
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

import "./mobilecategory.style.css";

// Import Swiper styles
import "swiper/css";

import { Link, useLocation } from "react-router-dom";
import { categoryItems } from "../Category/categoryItems";

const MobileCategory = () => {
  const category = useLocation().pathname.split("/")[1];

  return (
    <nav>
      <Swiper
        style={{
          "--swiper-navigation-color": "red",
          "--swiper-pagination-color": "red",
        }}
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={2}
        navigation
        rewind={true}
        className="mobile-category"
      >
        {categoryItems &&
          categoryItems.map((e) => (
            <SwiperSlide
              key={e.id}
              className="slider-item"
              style={{
                color: category === e.categoryName ? "#ffffff" : null,
              }}
            >
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

export default MobileCategory;
