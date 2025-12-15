import React from 'react';

const Banner = () => {
 
  return (
    <div  className="carousel w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
      
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/fGXnWZdf/victor-g-N04-FIf-Hhv-k-unsplash.jpg"
          className="w-full h-full object-cover"
          alt="Dog"
        />
        <div className="absolute inset-0 flex items-center justify-between px-5">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/DjR28JX/baptist-standaert-mx0-DEnf-Yxic-unsplash.jpg"
          className="w-full h-full object-cover"
          alt="Dog"
        />
        <div className="absolute inset-0 flex items-center justify-between px-5">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/ksSBDpcz/ryan-walton-Ab-NO2iejo-XA-unsplash.jpg"
          className="w-full h-full object-cover"
          alt="Cat"
        />
        <div className="absolute inset-0 flex items-center justify-between px-5">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/7tDFWQ28/manja-vitolic-g-KXKBY-C-Dk-unsplash.jpg"
          className="w-full h-full object-cover"
          alt="Cat"
        />
        <div className="absolute inset-0 flex items-center justify-between px-5">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Banner;
