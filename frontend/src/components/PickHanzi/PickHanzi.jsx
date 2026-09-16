import React, { useState, useEffect } from 'react';
import './PickHanzi.css';

const PickHanzi = () => {
  const [targetSentence, setTargetSentence] = useState('我喜欢你');
  const [currentSentence, setCurrentSentence] = useState(["", "", "", ""]);
  const [fallingHanzi, setFallingHanzi] = useState([]);

  const generateRandomHanzi = () => {
    const hanziList = ['我', '喜', '欢', '你', '爱', '好', '吃', '饭'];
    const randomIndex = Math.floor(Math.random() * hanziList.length);
    return hanziList[randomIndex];
  };

  const handleHanziClick = (hanzi, index) => {
    setCurrentSentence((prevSentence) => {
      const newSentence = [...prevSentence];
      newSentence[index] = hanzi;
      return newSentence;
    });
  };

  const handleDragStart = (event, hanzi) => {
    event.dataTransfer.setData('text/plain', hanzi);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDropContainer = (event, index) => {
    event.preventDefault();
    const draggedHanzi = event.dataTransfer.getData('text/plain');
    setCurrentSentence((prevSentence) => {
      const newSentence = [...prevSentence];
      newSentence[index] = draggedHanzi;
      return newSentence;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      updateFallingHanzi();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Check if the sentence is complete
    if (currentSentence.every((hanzi) => hanzi !== "")) {
      // Display a popup message (you can replace this with your own logic)
      alert("Sentence complete!");
      // Clear the sentence for the next round
      setCurrentSentence(["", "", "", ""]);
    }
  }, [currentSentence]);

  // const updateFallingHanzi = () => {
  //   setFallingHanzi((prevHanzi) => {
  //     const newHanzi = {
  //       hanzi: generateRandomHanzi(),
  //       positionX: Math.random() * 300, // Adjust the width as needed
  //     };
  //     return [...prevHanzi, newHanzi];
  //   });
  // };

  const updateFallingHanzi = () => {
    setFallingHanzi((prevHanzi) => {
      // Remove characters that have fallen below the visible area
      const updatedHanzi = prevHanzi.filter((hanzi) => hanzi.top < window.innerHeight);
  
      // Add a new character
      const newHanzi = {
        hanzi: generateRandomHanzi(),
        positionX: Math.random() * 300, // Adjust the width as needed
        top: 0,
      };
  
      return [...updatedHanzi, newHanzi];
    });
  };

  return (
    <div className="App">
      <div className="target-sentence">{targetSentence}</div>
      <div className="falling-hanzi">
        {fallingHanzi.map((hanzi, index) => (
          <div
            key={index}
            className="selection_circle hanzi"
            // style={{ left: hanzi.positionX }}
            style={{ left: hanzi.positionX, top: hanzi.top }}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, hanzi.hanzi)}
            onClick={() => handleHanziClick(hanzi.hanzi, index)}
          >
            {hanzi.hanzi}
          </div>
        ))}
      </div>
      <div className="sentence-boxes">
        {targetSentence.split('').map((_, index) => (
          <textarea
            key={index}
            value={currentSentence[index]}
            className={`sentence-box ${index < currentSentence.length ? 'filled' : ''}`}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDropContainer(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PickHanzi;
