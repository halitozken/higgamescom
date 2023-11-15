// Import Swiper React components
import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";
import "./category.style.css";

const Category = () => {
  //   const dispatch = useDispatch();
  //   const category = useSelector((state) => state.category.category);

  //   const handleCategory = (category) => {
  //     dispatch(changeCategory(category));
  //     dispatch(resetPage(1));
  //   };

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
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        className="container"
      >
        {/* {categoryItems &&
          categoryItems.map((e) => (
            <SwiperSlide
              key={e.id}
              className="slider-item"
              onClick={(e) => handleCategory(e.target.innerHTML)}
              style={{ color: category === e.categoryName ? "#ffffff" : null }}
            >
              {e.categoryName}
            </SwiperSlide>
          ))} */}
      </Swiper>
    </nav>
  );
};

export default Category;
