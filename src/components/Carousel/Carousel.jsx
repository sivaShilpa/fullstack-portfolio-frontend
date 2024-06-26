import React, { useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import Images from "../../constants/Images";
import "./Carousel.css";

const Carousel = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="carousel">
      <div onClick={prevSlide} className="carousel_link">
        <img src={Images.Left} alt="Left" className="carousel_indicator" />
      </div>

      <ProjectCard project={projects[activeIndex]} className="carousel_card" />

      <div onClick={nextSlide} className="carousel_link">
        <img src={Images.Right} alt="Right" className="carousel_indicator" />
      </div>
    </div>
  );
};
export default Carousel;
