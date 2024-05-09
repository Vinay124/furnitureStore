import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Banner.moudle.css'
import Slider from 'react-slick'
// sliderimages
import SliderFirst from '../../assets/banner/slide1.png'
import SliderSecond from '../../assets/banner/slide2.png'
import SliderThree from '../../assets/banner/slide3.png'
import { RxDotFilled } from "react-icons/rx";


const Banner = () => {

    const sliderSettings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed:500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <RxDotFilled />,
        prevArrow: <RxDotFilled />,
        responsive: [{
            breakpoint: 1280,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
            },{
            breakpoint: 1024,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
    }}]};


    // Banner Json
    const sliderBanner = {
        "data" : [
            {
                id:1,
                title: "Explore Our New Collection",
                subtitle: "Discover the latest trends in furniture and decor.",
                description: "Create bespoke furniture pieces tailored to your style and needs.",
                buttonText: "Shop Now",
                buttonLink: "/new-collection",
                backgroundImage: SliderFirst
            },
            {
                title: "Enhance Your Home Office",
                subtitle: "Find stylish furniture pieces to elevate your home.",
                description: "Discover the latest trends in furniture and decor.",
                buttonText: "Shop Now",
                buttonLink: "/new-collection",
                backgroundImage: SliderSecond
            },
            {
                title: "Upgrade Your Living Space",
                subtitle: "Transform your bedroom into a sanctuary of comfort and style.",
                description: "Find stylish furniture pieces to elevate your home.",
                buttonText: "Browse Now",
                buttonLink: "/living-space",
                backgroundImage: SliderThree
            },
            // {
            //     title: "Create Your Dream Bedroom",
            //     subtitle: "Explore our dining furniture collection for gatherings with family and friends.",
            //     description: "Transform your bedroom into a sanctuary of comfort and style.",
            //     buttonText: "Discover",
            //     buttonLink: "/bedroom",
            //     backgroundImage: "path/to/bedroom_banner.jpg"
            // },
        ]
    }


  return (
    <>
    <div className='sectionContainer'>
    <Slider {...sliderSettings}>
   
    {sliderBanner.data.map((bannerItem, i) => (
    <section className='bannerSection' key={i}>
        <Container>
                <Row className='bannerRow'>
                    <Col data-aos="fade-up" data-aos-duration="5000">
                        <div className='sliderinner'>
                            <div>
                                <h5>{bannerItem.subtitle}</h5>
                                <h1>{bannerItem.title}</h1>
                            </div>
                            <div>
                                <p>{bannerItem.description}</p>
                            </div>

                            <div>
                                <button className='bannerButton'>{bannerItem.buttonText}</button>
                            </div>
                        </div>
                    </Col>
                    <Col data-aos="fade-down" data-aos-duration="5000">
                        <div className='bannerImage'>
                                <img src={bannerItem.backgroundImage} className='' alt=""/>
                        </div>
                    </Col>
                </Row>
        </Container>
    </section>
    ))}
    </Slider>
    </div>
    </>
  )
}

export default Banner