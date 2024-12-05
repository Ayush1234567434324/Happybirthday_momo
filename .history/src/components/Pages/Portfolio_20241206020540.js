import React, { useState, useEffect } from 'react';
import bg from './background.jpg';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from 'react-router-dom';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import HTMLFlipBook from 'react-pageflip';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Portfolio = () => {
  const location = useLocation();
  const stateFromLink = "wwe";
  const pagecover = "wwe";
  const handle = useFullScreenHandle();

  const [see, setSee] = useState(0);

  const mangabook = () => {
    setSee(!see);
  };

  // Directly assign local PDF file paths to responseData


  const getBaseUrl = () => {
    // Check the current host to determine the base URL
    if (window.location.hostname === 'localhost') {
      return 'http://localhost:3000'; // Localhost for development
    } else {
      return 'https://happybirthday-momo.vercel.app/'; // Replace with your production URL
    }
  };
  
  const responseData = Array.from({ length: 56 }, (_, index) => {
    // Dynamically create the full PDF path based on the base URL
    const baseUrl = getBaseUrl();
    return `${baseUrl}/flipbukchinki/IMG_20230923_144938-pages-${index + 1}.pdf`;
  });
  
  console.log(responseData);
  

  const getValueBasedOnWidth = (width) => {
    if (width > 1000) {
      return 100;
    } else if (width > 900) {
      return 50;
    } else if (width > 800) {
      return 20;
    } else if (width > 700) {
      return 10;
    } else {
      return 0;
    }
  };

  const pages = responseData.map((filePath, index) => (
    <div className="demoPage page-con" key={index}>
      <Document file={filePath} loading="...loading">
        <Page
          pageNumber={1}
          renderAnnotationLayer={false}
          renderTextLayer={false}
          height={see ? 700 : window.innerHeight}
          width={see ? 480 : window.innerWidth - getValueBasedOnWidth(window.innerWidth)}
        />
      </Document>
    </div>
  ));

  const pagesfront = (
    <div className="demoPage page-cover" key={0}>
      <div className="page page-cover">
        <div className="page-content" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <img src='chinki8.jpg' height={700} width={400} />
        </div>
      </div>
    </div>
  );

  const pagesextra = (
    <div className="demoPage page-cover1" key={1}>
      <div className="page" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
        <div className="page-content" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }}>
          <img className="page-img" src="https://i.imgur.com/QiZeZgc.jpg" height={460} width={400} />
        </div>
      </div>
    </div>
  );

  const pagesback = (
    <div className="demoPage page-cover" key={pages.length + 2}>
      <div className="page page-cover">
        <div className="page-content" style={{ display: 'flex', justifyContent: 'center', height: '100%' }}>
          <img src='chinki8.jpg' height={700} width={400} />
        </div>
      </div>
    </div>
  );

  const pagesextra1 = (
    <div className="demoPage page-cover" key={pages.length + 3}>
      <div className="page">
        <div className="page-content">
          <h2></h2>
        </div>
      </div>
    </div>
  );

  const pagesextra2 = (
    <div className="demoPage page-cover" key={pages.length + 4}>
      <div className="page">
        <div className="page-content">
          <h2></h2>
        </div>
      </div>
    </div>
  );

  const allpages = [pagesfront, pagesextra, ...pages, pagesextra1, pagesextra2, pagesback];
  const checkpages = [pagesfront, pagesextra, ...pages, pagesextra1, pagesback];
  const finalpages1 = [...pages];
  const finalpages = (responseData.length + 5) % 2 ? checkpages : allpages;

  const mainpages = finalpages1.map((page, index) => {
    const styledPage = React.cloneElement(page, {
      style: {
        display: 'flex',
        justifyContent: 'center',
        background: 'transparent',
        boxShadow: 'none',
        ...page.props.style,
      },
    });

    return (
      <div key={index} className="mainpage-container">
        {styledPage}
      </div>
    );
  });

  setTimeout(function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 20);

  const book = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '800px',
        marginTop: '5%',
        background: handle.active ? `url(${bg})` : 'transparent',
        backgroundSize: 'contain',
      }}
    >
      <HTMLFlipBook
        width={495}
        height={733}
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.8}
        showCover={true}
        mobileScrollSupport={true}
        className="demo-book"
      >
        {finalpages}
      </HTMLFlipBook>
    </div>
  );

  const casual = (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', marginTop: '8rem', gap: '10px' }}>
      {mainpages}
    </div>
  );

  return (
    <div>
      <div style={{ position: 'absolute', top: '10rem', right: '2rem' }}>
        <img height="40px" src="fullscreen.svg" onClick={handle.enter} className="hoverable" alt="fullscreen" />
      </div>
      <div style={{ position: 'absolute', top: '10rem', right: '12rem' }}>
        <button onClick={mangabook}>{see ? 'Book' : 'Normal'}</button>
      </div>
      <div className="font-heading" style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '10rem' }}>
        <h1 className="h4">{stateFromLink.discription}</h1>
      </div>
      <FullScreen handle={handle}>
        {handle.active && see ? book : casual}
      </FullScreen>
    </div>
  );
};

export default Portfolio;
