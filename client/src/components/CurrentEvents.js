import React from 'react';
import Slider from 'react-slick';
import event1 from '../assets/images/events/event1.png';
import event2 from '../assets/images/events/event2.png';
import event3 from '../assets/images/events/event3.png';
import event4 from '../assets/images/events/event4.png';
import event5 from '../assets/images/events/event5.png';

const events = [event1, event2, event3, event4];

const CurrentEvents = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    appendDots: dots => (
      <div style={{ bottom: "0px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
    ),
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <section className="current-events py-8">
      <h2 className="text-header font-bold text-white mb-4 text-center">Current Events</h2>
      <div className="container mx-auto">
        <Slider {...settings}>
          {events.map((event, index) => (
            <div key={index} className="px-4">
              <img src={event} alt={`Event ${index + 1}`} className="w-full rounded-lg" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CurrentEvents;
