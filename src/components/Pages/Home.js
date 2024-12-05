import React, { useRef } from "react";

const videos = [
  { id: 1, title: "Miss U Baka", src: "chinki1.mp4" },
  { id: 2, title: "Rondhu Chinki", src: "chinki2.mp4" },
  { id: 3, title: "Padhakoo Chinki", src: "chinki3.mp4" },
  { id: 4, title: "Mere Liye :)", src: "chinki4.mp4" },
  { id: 5, title: "Just A Little Bit", src: "chinki5.mp4" },
  { id: 6, title: "Learn To Dance", src: "chinki6.mp4" },
  { id: 7, title: "Cute Chinki", src: "chinki7.mp4" },
  { id: 8, title: "Chotu Chinki", src: "chinki8.mp4" },
  { id: 9, title: "Beautiful Chinki", src: "chinki9.mp4" },
  { id: 10, title: "Hawa Ke Sath Sath", src: "chinki10.mp4" },
  { id: 11, title: "What is this Behaviour?", src: "chinki11.mp4" },
  { id: 12, title: "Chinki in Tension", src: "chinki12.mp4" },
  { id: 13, title: "Ohoo Singer", src: "chinki13.mp4" },
  { id: 14, title: "Har ek Pal ka Wada", src: "chinki14.mp4" },
  { id: 15, title: "Ohoo Dancer", src: "chinki15.mp4" },
  { id: 16, title: "Zanzee Dancer", src: "chinki16.mp4" },
  { id: 17, title: "Birthday Girl", src: "chinki.mp4" },
  { id: 17, title: "This moment", src: "chinki17.mp4" },
];


const Home = () => {
  const videoRef = useRef(null);

  const playFullScreen = (src) => {
    if (videoRef.current) {
      videoRef.current.src = src;
      videoRef.current.requestFullscreen();
      videoRef.current.play();
    }
  };

  const renderVideos = () => {
    const columns = [];
    for (let i = 0; i < videos.length; i += 3) {
      const column = (
        <div key={i} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {videos.slice(i, i + 3).map((video, index) => (
            <div key={video.id} style={{ margin: '10px', cursor: 'pointer' }} onClick={() => playFullScreen(video.src)}>
              <h3 style={{ fontSize: '0.9rem', textAlign: 'center' }}>{video.title}</h3>
              <video className="video2" width="400px" height="500px" loop playsInline>
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      );
      columns.push(column);
    }
    return columns;
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Happy Birthday Chinki</h1>

      <div style={{ textAlign: 'center' }}>
        <video className="video1" ref={videoRef} width="80%" height="100%"  loop playsInline>
          <source src="chinki.mp4" type="video/mp4" />
        </video>
      </div>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Mere pyari chinki</p>
      </div>

      {renderVideos()}

      
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>Yaar videos toh bahut h lekin ye kuch mere fav videos and haan wo gaana :P I will never fall in love uske bina mazza nhi aayegaaa mera fav gaanaa. </p>
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <video className="video2" width="400px" height="500px" loop playsInline>
                <source src="singer.mp4" type="video/mp4" />
              </video>
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <p>I Just want to say I Love you Sooooo much , Bhagwan mere Bhawna ko saare khushiyaan de. </p>
      </div>
    </>
  );
};

export default Home;
