import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/product.css";

const Product = () => {
    const products = [
        { img: "product1.png", title: "Watch Collections" },
        { img: "c.png", title: "Chairs" },
        { img: "product2.png", title: "Laptops" },
        { img: "product3.png", title: "Classic Chairs" },
        { img: "product4.png", title: "Shoes" },
        { img: "product5.png", title: "Shirts" },
    ];

    const itemsPerPage = 4;
    const [startIndex, setStartIndex] = useState(0); // index of first visible item
  const [showNav, setShowNav] = useState(false);
    const handlePrev = () => {
        // wrap around circularly
        setStartIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    const handleNext = () => {
        setStartIndex((prev) => (prev + 1) % products.length);
    };

    // Get 4 items for display, wrapping around
    const currentItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
        currentItems.push(products[(startIndex + i) % products.length]);
    }

    return (
       <div
      className="wrapBox"
      onMouseEnter={() => setShowNav(true)}
      onMouseLeave={() => setShowNav(false)}
    >
      {showNav && (
        <button data-aos="fade-right" className="navBtn prevBtn" onClick={handlePrev}>
          &#10094;
        </button>
      )}

            <div className="itemHolder" style={{ transition: "transform 0.5s ease" }}>
                {currentItems.map((product, index) => (
                    <div className="itemCard" key={index}>
                        <img src={product.img} alt={product.title} />
                        <div className="hoverLayer">
                            <h2>{product.title}</h2>
                            <br/>
                            <br />
                            
                        </div>
                        <Link to="#">
                        <div data-aos="fade-left"  className="hoverLayer">
                            <button >SHOP NOW</button>
                        </div>
                        </Link>
                        
                        
                    </div>
                ))}
            </div>

            
      {showNav && (
        <button data-aos="fade-left" className="navBtn nextBtn" onClick={handleNext}>
          &#10095;
        </button>
      )}
        </div>
    );
};

export default Product;
