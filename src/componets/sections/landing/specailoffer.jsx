import { useState, useEffect } from "react";

const SpecialOffer = () => {

    const calculateTimeLeft = () => {
        const targetDate = new Date("2025-12-31T23:59:59").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="specialoffer">
            <div className="offer-page-wrapper">
                <div className="content-display-area">
                    <div className="feature-copy-block">

                        <p className="intro-tagline">Get **30% Discount**</p>
                        <h1 className="werey">Best Promo Offer For Your</h1>
                        <p className="offer-description">
                            Lorem elementum Sed congue nisl dolorSed congue nisl dolor Lorem 
                            elementum Sed congue nisl dolorSed eget augue Pellentesque sollicitudin 
                            efficitur, mattis dui vitae, sollicitudin nisl.
                        </p>

                        <p className="expiry-notice-label">Offer Ends In</p>

                        <div className="time-limit-widget">
                            <div className="timer-segment">
                                <span className="segment-value">{timeLeft.days}</span>
                                <span className="segment-label">Days</span>
                            </div>
                            <div className="divider-mark">|</div>
                            <div className="timer-segment">
                                <span className="segment-value">
                                    {String(timeLeft.hours).padStart(2, "0")}
                                </span>
                                <span className="segment-label">Hours</span>
                            </div>
                            <div className="divider-mark">|</div>
                            <div className="timer-segment">
                                <span className="segment-value">
                                    {String(timeLeft.minutes).padStart(2, "0")}
                                </span>
                                <span className="segment-label">Minutes</span>
                            </div>
                            <div className="divider-mark">|</div>
                            <div className="timer-segment">
                                <span className="segment-value">
                                    {String(timeLeft.seconds).padStart(2, "0")}
                                </span>
                                <span className="segment-label">Seconds</span>
                            </div>
                        </div>

                       <button class="action-buy-button">
  <span>
    Shop Now
     
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </span>
</button>

                    </div>

                    <div className="visual-asset-zone">
                        <img src="../Man.png" alt="Man pointing to the special offer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
