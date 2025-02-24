import React from 'react';
import '../Styles/MovingBannerStyle.css';
import BeeKeeperSvg from '../Assets/BeeKeeperSvg.svg';
import BrowthSvg from '../Assets/BrowthSvg.svg';
import BrightSvg from '../Assets/BrightSvg.svg';
import BrantSvg from '../Assets/BrantSvg.svg';
import BoostSvg from '../Assets/BoostSvg.svg';
import UaroSvg from '../Assets/UaroSvg.svg';



 const Movingbanner = () => {
  const images = [
    BrowthSvg,
    BrightSvg,
    BrantSvg,
    BoostSvg,
    UaroSvg,
    BeeKeeperSvg,
  ];
  return (
    <div className="image-slider">
      <div className="image-track">
        {images.concat(images).map((src, index) => ( // Duplicate images for smooth transition
          <img key={index} className="image-item" src={src} alt={`Group ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Movingbanner
;


