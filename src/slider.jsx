import React, { useState ,useEffect } from 'react';

function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(false);

  const images = [
    'programming.jpg',
    'Melissa King.jpg',
    'Kingdom in Blue, an art print by Matt Rockefeller.jpg',
   
  ];

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let intervalId;

    if (isAutoPlay) {
      intervalId = setInterval(goToNextSlide, 1000); 
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isAutoPlay]);

  const autoPlayImg = () =>{
    setIsAutoPlay(!isAutoPlay);
  }

  const stopAutoPlay = () =>{
    setIsAutoPlay(false);
    
  }

  return (
    <div>
      <img src={images[currentIndex]} style={{ width: '600px', height: '400px' }} />
      <p>
        <button style={{ marginRight: '10px', fontSize: '16px', padding: '8px 12px', backgroundColor: '#3498db', color: '#ffffff', border: 'none', borderRadius: '4px'}} onClick={goToPrevSlide}>Previous</button>
        <button style={{ marginRight: '10px', fontSize: '16px', padding: '8px 12px', backgroundColor: '#3498db', color: '#ffffff', border: 'none', borderRadius: '4px'}} onClick={goToNextSlide}>Next</button>
        <button style={{ marginRight: '10px', fontSize: '16px', padding: '8px 12px', backgroundColor: '#3498db', color: '#ffffff', border: 'none', borderRadius: '4px'}} onClick={autoPlayImg}>Slider</button>
        <button style={{ marginRight: '10px', fontSize: '16px', padding: '8px 12px', backgroundColor: '#3498db', color: '#ffffff', border: 'none', borderRadius: '4px'}} onClick={stopAutoPlay}>Stop</button>
    </p>
    </div>
  );
}

export default ImageSlider;
