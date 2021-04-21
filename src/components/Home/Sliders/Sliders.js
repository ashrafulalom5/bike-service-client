import React from 'react';
import Carousel from 'react-multi-carousel';
import './Sliders.css';
import 'react-multi-carousel/lib/styles.css';
import workshop1 from '../../../images/workshop1.jpg';
import workshop2 from '../../../images/workshop2.jpg';
import workshop3 from '../../../images/workshop3.jpg';
import workshop4 from '../../../images/workshop4.jpg';
import workshop5 from '../../../images/workshop5.jpg';
import workshop6 from '../../../images/workshop6.jpg';


const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Sliders = () => {
    return (
        <section className="slider text-white py-5">
            <div className="container">
                <h1>Here are some of our works</h1>
                <div className="row">
                    <div className="col-12">
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={2000}
                            keyBoardControl={true}
                            customTransition="all 1s linear"
                            transitionDuration={1000}
                            containerclassName="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListclassName="custom-dot-list-style"
                            itemclassName="carousel-item-padding-40-px"
                            className="py-5"
                        >
                            <div className="p-3"><img className="img-fluid" src={workshop1} alt="" /></div>
                            <div className="p-3"><img className="img-fluid" src={workshop2} alt="" /></div>
                            <div className="p-3"><img className="img-fluid" src={workshop3} alt="" /></div>
                            <div className="p-3"><img className="img-fluid" src={workshop4} alt="" /></div>
                            <div className="p-3"><img className="img-fluid" src={workshop5} alt="" /></div>
                            <div className="p-3"><img className="img-fluid" src={workshop6} alt="" /></div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sliders;