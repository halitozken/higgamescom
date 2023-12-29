import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

import "./category.style.css";

import { categoryItems } from "./categoryItems";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const Category = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
        slidesPerView={4}
        navigation
        rewind={true}
        className="swiper"
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

export default Category;
