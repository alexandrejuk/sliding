import React, { memo, useState } from 'react';
import './App.css';

function App() {

  const [movement, setMovement] = useState(0)
  const [lastTouch, setLastTouch] = useState(0)

  const handleTouchStart = e => {
    const clientX = e.nativeEvent.targetTouches[0].clientX
    return setLastTouch(clientX)
  }

  const handleMovement = (delta) => {
    if (delta < 0) {
      return setMovement(0)
    }
    return setMovement(84)
  };

  const handleTouchMove = e => {
    const delta = lastTouch - e.nativeEvent.touches[0].clientX;
    setLastTouch(e.nativeEvent.touches[0].clientX)
    return handleMovement(delta)
  }


  return (
    <div className="container">
      <div className="sliding">
        <div 
          className="slidingContent"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          style={{
            transform: `translateX(${movement * -1}px)`,
          }}
        >
          Your content here!
        </div>
        <div className="slidingOptions"
          style={{
            transform: `translateX(${movement * -1}px)`,
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
}

export default memo(App);
