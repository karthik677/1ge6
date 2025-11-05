import React from "react";
import { Workflow, Droplets, Sun } from "lucide-react";

const SERVICES = [
  { title: "Supply Chain Solutions", Icon: Workflow },
  { title: "Renewable Energy", Icon: Sun },
  { title: "Product Distribution", Icon: Droplets },
];

const ServicesVideoSection = ({
  videoSrc = "/video.mp4",
  heading = "Business Verticals",
  subheading = "Integrated solutions powered by people, technology, and purpose",
}) => {
  return (
    <section className="svs-section">
      <div className="svs-container">
        {/* LEFT CONTENT */}
        <div className="svs-left">
          <header className="svs-header">
            <p className="svs-sub">{subheading}</p>
            <h2 className="svs-title">{heading}</h2>
          </header>

          <div className="svs-list">
            {SERVICES.map(({ title, Icon }) => (
              <div className="svs-item" key={title}>
                <div className="svs-icon">
                  <Icon strokeWidth={1.8} />
                </div>
                <div className="svs-item-title">{title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — BIG 16:9 VIDEO */}
        <div className="svs-right">
          <div className="svs-video">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Business Verticals Video"
            />
          </div>
        </div>
      </div>

      <style>{`
        .svs-section {
          background: #fff;
          padding: 70px 0;
        }

        /* Two-column layout */
        .svs-container {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr; /* Larger video portion */
          width: min(1400px, 94%);
          margin: 0 auto;
          align-items: center;
          gap: 30px;
        }

        /* LEFT SIDE */
        .svs-left {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .svs-header {
          margin-bottom: 12px;
        }

        .svs-sub {
          margin: 0 0 4px;
          font-size: 0.95rem;
          color: #5f6b7a;
          line-height: 1.4;
        }

        .svs-title {
          margin: 0;
          font-size: clamp(2rem, 1.3rem + 2vw, 2.8rem);
          font-weight: 800;
          color: #0E0F2C;
          line-height: 1.1;
        }

        /* VERTICALS LIST */
        .svs-list {
          display: flex;
          flex-direction: column;
          gap: 8px; /* tighter spacing */
          margin-top: 16px;
          max-width: 500px;
        }

        .svs-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 14px; /* reduced height padding */
          border: 1px solid #e5edf5;
          border-radius: 10px;
          background: #f8fcff;
          transition: all 0.25s ease;
        }

        .svs-item:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 15px rgba(10, 40, 80, 0.08);
          border-color: #c9e4f5;
          background: #f4fbff;
        }

        .svs-icon {
          flex: 0 0 38px;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          display: grid;
          place-items: center;
          background: rgba(38, 182, 224, 0.12);
          border: 1px solid rgba(38, 182, 224, 0.35);
          color: #1c99bf;
        }

        .svs-icon svg {
          width: 18px;
          height: 18px;
        }

        .svs-item-title {
          font-weight: 700;
          color: #0E0F2C;
          font-size: 0.95rem;
          line-height: 1.4;
        }

        /* RIGHT SIDE - Full 16:9 video */
        .svs-right {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .svs-video {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          border-radius: 18px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);
        }

        .svs-video video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover; /* fills perfectly, no bars */
        }

        /* RESPONSIVE STYLES */
        @media (min-width: 1536px) {
          .svs-container {
            grid-template-columns: 0.7fr 1.3fr;
          }
        }

        @media (max-width: 1024px) {
          .svs-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .svs-right {
            order: -1;
          }
          .svs-video {
            aspect-ratio: 16 / 9;
            border-radius: 12px;
          }
          .svs-left {
            align-items: center;
            text-align: center;
          }
          .svs-list {
            width: 100%;
            max-width: 420px;
          }
        }

        @media (max-width: 640px) {
          .svs-section {
            padding: 50px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
