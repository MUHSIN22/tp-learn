import React, { useState, useCallback } from "react";
import Carousel from "nuka-carousel";
import ReactDom from "react-dom";

const colors = ["7732bb", "047cc0", "00884b", "e3bc13", "db7c00"];
// eslint-disable-next-line complexity
const Slidershow = () => {
  const [animation, setAnimation] = useState(undefined);
  const [autoplay, setAutoplay] = useState(false);
  const [cellAlign, setCellAlign] = useState("left");
  const [cellSpacing, setCellSpacing] = useState(0);
  const [heightMode, setHeightMode] = useState("max");
  const [length, setLength] = useState(colors.length);
  const [scrollMode, setScrollMode] = useState("remainder");
  const [slideIndex, setSlideIndex] = useState(0);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [transitionMode, setTransitionMode] = useState("scroll");
  const [underlineHeader, setUnderlineHeader] = useState(false);
  const [withoutControls, setWithoutControls] = useState(false);
  const [wrapAround, setWrapAround] = useState(false);
  const [zoomScale, setZoomScale] = useState(0.5);

  const handleImageClick = useCallback(() => {
    setUnderlineHeader((prevUnderlineHeader) => !prevUnderlineHeader);
  }, []);

  const handleZoomScaleChange = useCallback((event) => {
    setZoomScale(event.target.value);
  }, []);

  const renderTopControls = (currentSlide) => {
    return (
      <div
        style={{
          fontFamily: "Helvetica",
          color: "#fff",
          textDecoration: underlineHeader ? "underline" : "none"
        }}
      >
        
      </div>
    );
  };

  const slides = colors.slice(0, length).map((color, index) => (
    <img
      src={`https://via.placeholder.com/400/${color}/ffffff/&text=slide${
        index + 1
      }`}
      alt={`Slide ${index + 1}`}
      key={color}
      onClick={() => handleImageClick()}
      style={{
        width:600,
        height: heightMode === "current" ? 100 * (index + 1) : 400
      }}
    />
  ));

  return (
    <>
      <div style={{ width: "70%",height: "40rem", margin: "auto" }}>
        
        <Carousel
          cellSpacing={cellSpacing}
          animation={animation}
          autoplay={autoplay}
          cellAlign={cellAlign}
          heightMode={heightMode}
          scrollMode={scrollMode}
          slideIndex={slideIndex}
          slideListMargin={0}
          slidesToScroll={slidesToScroll}
          slidesToShow={slidesToShow}
          transitionMode={transitionMode}
          withoutControls={withoutControls}
          wrapAround={wrapAround}
          zoomScale={Number(zoomScale || 0)}
          renderAnnounceSlideMessage={({ currentSlide, slideCount }) => {
            return `Showing slide ${currentSlide + 1} of ${slideCount}`;
          }}
          renderTopCenterControls={({ currentSlide }) =>
            renderTopControls(currentSlide)
          }
        >
          {slides}
        </Carousel>
        
      </div>
     
    </>
  );
};

export default Slidershow;

// ReactDom.render(<App />, document.getElementById("root"));
