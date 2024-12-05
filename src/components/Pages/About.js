import React, { useState, useEffect } from "react";

const About = () => {
  const [selectedResolution, setSelectedResolution] = useState("144p");
  const [is1080pDisabled, setIs1080pDisabled] = useState(false);
  const [playSong, setPlaySong] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [flag,setflag] = useState(0);

  const handleResolutionChange = (e) => {
    const selectedValue = e.target.value;

    // If the selected resolution is "1080p", disable other options and prevent changing
    if (selectedValue === "1080p") {
      setIs1080pDisabled(true);
      setSelectedResolution(selectedValue);
      setPlaySong(true);
    } else {
      // If another resolution is selected, enable the "1080p" option and allow changing
      setIs1080pDisabled(false);
      setSelectedResolution(selectedValue);
      setPlaySong(false);
      setCurrentImageIndex(0);
    }
  };

  useEffect(() => {
    let timeout;

    // If the resolution is set to "1080p", play the song after 2 seconds
    if (playSong) {
      timeout = setTimeout(() => {
        // Get the audio element and play the song
        setflag(1);
        const audio = new Audio("/mine.mp3");
        audio.play();
        // Start cycling through images after audio starts playing
        startImageLoop();
      }, 600);
    }

    return () => {
      clearTimeout(timeout); // Clear the timeout if the component unmounts or resolution changes
      stopImageLoop();
    };
  }, [playSong]);

  const imageUrls = [
    "chinki1.jpg",
    "chinki2.jpg",
    "chinki3.jpg",
    "chinki4.jpg",
    "chinki5.jpg",
    "chinki6.jpg",
    "chinki7.jpg",
    "chinki8.jpg",
    
    // Add more image URLs as needed
  ];

  const startImageLoop = () => {
 
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    }, 3000); // Change image every 3 seconds (adjust as needed)

    // Store the interval ID in state to clear it later
    setCurrentImageIndex(interval);
  };

  const stopImageLoop = () => {
    clearInterval(currentImageIndex);
  };

  const getImageUrl = () => {
    // Return the image URL based on the current index in the array
    const resolutionImages = {
      "144p": "144p.png",
      "240p": "240p.png",
      "360p": "360p.png",
      "480p": "480p.jpeg",
      "720p": "720p.png",
      "1080p": "heart.jpg",
    };

    // Return the image URL based on the selected resolution and whether to show the alternate image
    
    
    
    return  flag? imageUrls[currentImageIndex]:resolutionImages[selectedResolution];
  };

  return (
    <>
      <h1>Ayu's Heart</h1>
      <label htmlFor="resolution">Select Resolution:</label>
      <select
        id="resolution"
        value={selectedResolution}
        onChange={handleResolutionChange}
      >
        <option value="144p" disabled={is1080pDisabled}>
          144p
        </option>
        <option value="240p" disabled={is1080pDisabled}>
          240p
        </option>
        <option value="360p" disabled={is1080pDisabled}>
          360p
        </option>
        <option value="480p" disabled={is1080pDisabled}>
          480p
        </option>
        <option value="720p" disabled={is1080pDisabled}>
          720p
        </option>
        <option value="1080p">1080p</option>
      </select>

      {/* Show the image based on the selected resolution with a fixed size */}
      <img
        src={getImageUrl()}
        alt={`Resolution: ${selectedResolution}`}
        style={{ width: "100%" }}
      />
    </>
  );
};

export default About;
