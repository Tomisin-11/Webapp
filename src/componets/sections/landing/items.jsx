import { useState, useRef, useEffect } from "react";

const ProductSlider = () => {
  const products = [
    { img: "product1.png", title: "Watch Collections" },
    { img: "c.png", title: "Chairs" },
    { img: "product2.png", title: "Laptops" },
    { img: "product3.png", title: "Classic Chairs" },
    { img: "product4.png", title: "Shoes" },
    { img: "product5.png", title: "Shirts" },
  ];

  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const [showNav, setShowNav] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  const scrollRef = useRef(null);

  // Update isMobile on resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    if (isMobile) {
      scrollRef.current.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    } else {
      setStartIndex((prev) => (prev - 1 + products.length) % products.length);
    }
  };

  const handleNext = () => {
    if (isMobile) {
      scrollRef.current.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    } else {
      setStartIndex((prev) => (prev + 1) % products.length);
    }
  };

  const visibleProducts = [];
  for (let i = 0; i < itemsPerPage; i++) {
    visibleProducts.push(products[(startIndex + i) % products.length]);
  }

  return (
    <section className="slider-section">
      <h2 className="slider-title">Latest Products</h2>
      <p className="slider-desc">
        Lorem elementum Sed congue nisl dolor Sed congue nisl dolor Lorem elementum
        Sed congue nisl dolor Sed.
      </p>

      <div
        className="slider-wrapper"
        onMouseEnter={() => !isMobile && setShowNav(true)}
        onMouseLeave={() => !isMobile && setShowNav(false)}
      >
        {/* Nav Buttons always visible on mobile */}
        {(showNav || isMobile) && (
          <button className="slider-nav prev-nav" onClick={handlePrev}>
            &#10094;
          </button>
        )}

        <div className="slider-track" ref={scrollRef} style={{ transition: "transform 0.5s ease" }}>
          {visibleProducts.map((product, index) => (
            <div className="slider-card" key={index}>
              <img src={product.img} alt={product.title} />
              <div className="slider-card-title">{product.title}</div>

              

              <div className="card-hover-panel">
                <h3>{product.title}</h3>
                <p>$30</p>

                <div className="card-hover-icons">
                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                  </button>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
                  </button>

                  <button>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"/></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {(showNav || isMobile) && (
          <button className="slider-nav next-nav" onClick={handleNext}>
            &#10095;
          </button>
        )}
      </div>
    </section>
  );
};

export default ProductSlider;
