import React, { useState } from 'react'

// https://medium.com/tinyso/how-to-create-the-responsive-and-swipeable-carousel-slider-component-in-react-99f433364aa0

import './Carousel.css'




export const CarouselItem = ({ children, width }) => {
  return (
    <div className='carousel-item' style={{ width }}>
      {children}
    </div>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }
    setActiveIndex(newIndex)
  }

  return (
    <div className='carousel'>
      <div className='inner' style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "100%" })
        })}

      </div>
      <div className='indicators'>
        <button onClick={() => {
          updateIndex(activeIndex - 1)
        }}>prev</button>
        {React.Children.map(children, (child, index) => {
          return (
            <button className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => updateIndex(index)}
            >
              {index + 1}
            </button>
          )
        })}

        <button onClick={() => {
          updateIndex(activeIndex + 1)
        }}>next</button>
      </div>
    </div>
  )
}

export default Carousel