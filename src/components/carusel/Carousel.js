import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = ({children}) => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={8}
            navigation
            scrollbar={{ draggable: true }}
        >
            {children}
        </Swiper>
    )
};

export default Carousel