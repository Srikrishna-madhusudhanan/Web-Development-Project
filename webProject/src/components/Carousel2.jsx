import React, { useState, useEffect } from "react";
import "./Carouselstyle2.css"; // Assuming you have the same styles in your CSS file

const Carousel2 = () => {
  // Carousel items
  const [sliderItems, setSliderItems] = useState([
    {
      imgSrc: "/images/img21.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination to know about pets,",
      description:
        "pet care tips and a thriving pet loving community!",
    },
    {
      imgSrc: "/images/img3.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination to know about pets,",
      description:
        "pet care tips and a thriving pet loving community!",
    },
    {
      imgSrc: "/images/photo6.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination to know about pets,",
      description:
        "pet care tips and a thriving pet loving community!",
    },
    {
      imgSrc: "/images/img4.jpg",
      author: "",
      title: "ANIMIMIC",
      topic: "Your go-to destination for know about pets,",
      description:
        "pet care tips and a thriving pet loving community!",
    },
  ]);

  // Thumbnail items (assumed same as slider items for now)
  const [thumbnailItems, setThumbnailItems] = useState(sliderItems);

  // Time intervals
  const timeRunning = 3000;
  const timeAutoNext = 7000;

  // Current timeout reference
  const [currentTimeout, setCurrentTimeout] = useState(null);

  // Function to move to the next slide
  const moveNext = () => {
    setSliderItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    setThumbnailItems((prevItems) => [...prevItems.slice(1), prevItems[0]]);
    resetAutoSlide();
  };

  // Function to move to the previous slide
  const movePrev = () => {
    setSliderItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
    setThumbnailItems((prevItems) => [
      prevItems[prevItems.length - 1],
      ...prevItems.slice(0, -1),
    ]);
    resetAutoSlide();
  };

  // Reset the auto-slide timer
  const resetAutoSlide = () => {
    clearTimeout(currentTimeout);
    setCurrentTimeout(setTimeout(moveNext, timeAutoNext));
  };

  // Initialize auto-slide
  useEffect(() => {
    const timeout = setTimeout(moveNext, timeAutoNext);
    setCurrentTimeout(timeout);

    // Cleanup the timeout on unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="carousel">
      <div className="list">
        {sliderItems.map((item, index) => (
          <div className="item" key={index}>
            <img src={item.imgSrc} alt={item.title} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">{item.description}</div>
              {/* <div className="buttons">
                <button>Login</button>
                <button>Sign Up</button>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {thumbnailItems.map((thumb, index) => (
          <div className="item" key={index}>
            <img src={thumb.imgSrc} alt={thumb.title} />
            <div className="content">
              <div className="title"></div>
              <div className="description"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={movePrev}>
          &lt;
        </button>
        <button id="next" onClick={moveNext}>
          &gt;
        </button>
      </div>
      <div className="seperation"></div>
      <div className="time"></div>
     
      
    </div>
    
  );
};

export default Carousel2;