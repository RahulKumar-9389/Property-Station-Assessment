import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import { TbCurrencyRupee } from "react-icons/tb";
import { ImLocation2 } from "react-icons/im";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";



const Carousel = ({ data }) => {

    const [slideIndex, setSlideIndex] = useState(0);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "50px",
        slidesToShow: 3,
        speed: 500,
        beforeChange: (current, next) => setSlideIndex(next),
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return <>
        <div className="slide_container">
            <Slider {...settings}>
                {
                    data.map((value, index) => {
                        return <div
                            className={index === slideIndex ? 'active_slide slide' : 'slide'}
                            key={value.id}
                        >
                            <img src={value.img} alt={value.propertyName} />

                            <div className="content_container">

                                <h2>{value.propertyName}</h2>

                                <div className="location">
                                    <ImLocation2 className="location_icon" />
                                    <p>{value.location}</p>
                                </div>

                                <div className="price">
                                    <TbCurrencyRupee className="price_icon" />
                                    <p>{value.price}</p>
                                </div>

                                <button>View More</button>

                            </div>

                        </div>
                    })
                }
            </Slider>
        </div>
    </>
}

export default Carousel;