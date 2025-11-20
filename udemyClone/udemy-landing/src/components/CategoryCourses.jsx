import React, { useState } from "react";
import "./CategoryCourses.css";

const categories = {
  "Artificial Intelligence (AI)": [
    {
      title: "The AI Engineer Course 2025: Complete AI Engineer Bootcamp",
      provider: "365 Careers",
      rating: 4.6,
      reviews: "11,778 ratings",
      price: "£309.99",
      originalPrice: "£349.99",
      image: "\\6112535_7103.jpg",
    },
    {
      title: "Intro to AI Agents and Agentic AI",
      provider: "365 Careers",
      rating: 4.4,
      reviews: "1,806 ratings",
      price: "£309.99",
      originalPrice: "£349.99",
      image: "\\6791359_66d8_2.webp",
    },
  ],
  Python: [
    {
      title: "100 Days of Code: The Complete Python Pro Bootcamp",
      provider: "Dr. Angela Yu, Developer and Lead Instructor",
      rating: 4.7,
      reviews: "400508 ratings",
      price: "£519.99",
      originalPrice: "£689.99",
      image: "/python1.webp",
    },
    {
      title: "The Complete Python Bootcamp: From Zero to Hero in Python",
      provider: "Jose Portilla",
      rating: 4.6,
      reviews: "551285 ratings",
      price: "£399.99",
      originalPrice: "£539.99",
      image: "/python2.jpg",
    },
  ],
};

function CategoryCourses() {
  const [selectedCategory, setSelectedCategory] = useState("Artificial Intelligence (AI)");

  return (
    <div id="category-courses">
      <div id="header">
        <h2>Skills to transform your career and life</h2>
        <p>
          From critical skills to technical topics, Udemy supports your professional development.
        </p>
      </div>
      <div id="categories">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div id="courses-list">
        {categories[selectedCategory].map((course, index) => (
          <div key={index} className="course-card">
            <img src={course.image} alt={course.title} />
            <div className="course-info">
              <h3>{course.title}</h3>
              <p>{course.provider}</p>
              <div className="course-meta">
                <span className="rating">⭐ {course.rating}</span>
                <span className="reviews">{course.reviews}</span>
              </div>
              <div className="course-pricing">
                <span className="current-price">{course.price}</span>
                <span className="original-price">{course.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryCourses;