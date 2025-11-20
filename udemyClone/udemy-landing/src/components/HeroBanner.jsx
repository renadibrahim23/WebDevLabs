import { useState } from "react";
import "./HeroCarousel.css";

function HeroCarousel() {
  const slides = [
    {
      id: 1,
      subtitle: "Learn more, spend less — Black Friday Sale from E£279.99",
      subText: "Sitewide savings on thousands of courses. Ends Nov 28.",
      image: "./public/black-friday.jpg",
    },
    {
      id: 2,
      subtitle: "Build in-demand skills and advance your career at your pace.",
      buttonText: "Start Learning",
      image: "/assets/default-banner.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-carousel">
      <button className="prev" onClick={prevSlide}>&lt;</button>

      <div className="slide">
        <img src={slides[current].image} alt={slides[current].title} />
        <div className="slide-text-box">
          <h1>{slides[current].subtitle}</h1>
          <p>{slides[current].subText}</p>
        </div>
      </div>

      <button className="next" onClick={nextSlide}>&gt;</button>
    </section>
  );
}

export default HeroCarousel;
