import { useEffect, useState } from "react";
import "../styles/herosection.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Herosection = () => {
  const [showArrows, setShowArrows] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800, // Optional: animation duration
      once: false,   // Allow re-animations
    });
  }, []);

  // Re-trigger AOS animations when slides change
  useEffect(() => {
    const radios = document.querySelectorAll('input[name="slider"]');

    const handleSlideChange = () => {
      AOS.refresh(); // Re-animate all elements
    };

    radios.forEach(radio => radio.addEventListener('change', handleSlideChange));

    return () => {
      radios.forEach(radio => radio.removeEventListener('change', handleSlideChange));
    };
  }, []);

  const moveSlide = (direction) => {
    const slides = ["s1", "s2", "s3"];
    let currentIndex = slides.findIndex(id => document.getElementById(id).checked);
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) nextIndex = 2;
    if (nextIndex > 2) nextIndex = 0;

    document.getElementById(slides[nextIndex]).checked = true;
  };

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >

      {/* Radio Buttons */}
      <input type="radio" name="slider" id="s1" defaultChecked />
      <input type="radio" name="slider" id="s2" />
      <input type="radio" name="slider" id="s3" />

      {/* ARROWS */}
      {showArrows && (
        <>
          <button className="arrow prev" data-aos="fade-right" onClick={() => moveSlide(-1)}>‹</button>
          <button className="arrow next" data-aos="fade-left" onClick={() => moveSlide(1)}>›</button>
        </>
      )}

      <div className="slides">
        {/* SLIDE 1 */}
        <div className="slide bg1">
          <div className="overlay"></div>
          <div className="content">
            <h4 data-aos="fade-down">TRANDING NOW</h4>
            <h1 data-aos="fade-up">Best Exclusive Chair<br />Your Collection.</h1>
            <p data-aos="fade-left">A Theme for Woocommerce, E-commerce, Business.</p>
            <div className="btn-group">
              <a href="#" data-aos="fade-right" className="btn">Shop Now</a>
              <a href="#" data-aos="fade-left" className="btn outline">Buy Now</a>
            </div>
          </div>
          <div className="chair">
            <img data-aos="fade-up" src="/chair.png" alt="chair" />
          </div>
        </div>

        {/* SLIDE 2 */}
        <div className="slide bg2">
          <div className="overlay"></div>
          <div className="content">
            <h4 data-aos="fade-down">LIMITED SALES</h4>
            <h1 data-aos="fade-up">Modern Office Chair<br />Comfort Redefined.</h1>
            <p data-aos="fade-left">High-quality ergonomic chair for workspace.</p>
            <div className="btn-group">
              <a href="#" data-aos="fade-right" className="btn">Shop Now</a>
              <a href="#" data-aos="fade-left" className="btn outline">Buy Now</a>
            </div>
          </div>
          <div className="chair">
            <img data-aos="fade-up" src="/c.png" alt="chair" />
          </div>
        </div>

        {/* SLIDE 3 */}
        <div className="slide bg3">
          <div className="overlay"></div>
          <div className="content">
            <h4 data-aos="fade-down">NEW ARRIVAL</h4>
            <h1 data-aos="fade-up">Luxury Sofa Chair<br />For Your Home.</h1>
            <p data-aos="fade-right">Soft fabric with ergonomic design.</p>
            <div className="btn-group">
              <a href="#" data-aos="fade-right" className="btn">Shop Now</a>
              <a href="#" data-aos="fade-left" className="btn outline">Buy Now</a>
            </div>
          </div>
          <div className="chair">
            <img data-aos="fade-up" src="/chair3.png" alt="chair" />
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="nav">
        <label htmlFor="s1"></label>
        <label htmlFor="s2"></label>
        <label htmlFor="s3"></label>
      </div>
    </div>
  );
};

export default Herosection;
