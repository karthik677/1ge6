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
        {/* LEFT */}
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

        {/* RIGHT — big 16:9 video */}
        <div className="svs-right">
          <div className="svs-video">
            <video
              src={videoSrc}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Services video"
            />
          </div>
        </div>
      </div>

      <style>{`
        .svs-section{
          background:#fff;
          padding:72px 0;
        }

        /* Make video bigger on large screens */
        .svs-container{
          display:grid;
          grid-template-columns: 0.85fr 1.15fr; /* video wider than text */
          width:min(1400px, 94%);
          margin:0 auto;
          align-items:center;
          gap:28px; /* tight gap like your screenshot */
        }

        /* tighten headings and list spacing */
        .svs-left{ display:flex; flex-direction:column; justify-content:center; }
        .svs-header{ margin-bottom:14px; }
        .svs-sub{ margin:0 0 4px; font-size:.95rem; color:#5f6b7a; line-height:1.45; }
        .svs-title{ margin:0; font-size:clamp(2rem,1.1rem + 2vw,2.8rem); font-weight:800; color:#0E0F2C; line-height:1.15; }

        /* compact verticals list */
        .svs-list{
          display:flex;
          flex-direction:column;
          gap:10px;          /* small space like in your image */
          margin-top:16px;
          max-width:560px;   /* keeps cards narrow/compact */
        }
        .svs-item{
          display:flex; align-items:center; gap:12px;
          padding:12px 16px;                 /* compact padding */
          border:1px solid #e6edf5;
          border-radius:12px;
          background:#f8fcff;
          box-shadow: 0 1px 0 rgba(0,0,0,.02) inset;
          transition: box-shadow .2s ease, transform .2s ease, border-color .2s ease;
        }
        .svs-item:hover{
          transform: translateY(-1px);
          box-shadow: 0 8px 18px rgba(10,40,80,.08);
          border-color:#cfe7f7;
          background:#f4fbff;
        }
        .svs-icon{
          flex:0 0 40px; width:40px; height:40px;
          border-radius:10px;
          display:grid; place-items:center;
          background: rgba(38,182,224,.12);
          border: 1px solid rgba(38,182,224,.35);
          color:#1c99bf;
        }
        .svs-icon svg{ width:20px; height:20px; }
        .svs-item-title{ font-weight:700; color:#0E0F2C; font-size:1rem; }

        /* video: full width of its column, perfect 16:9 */
        .svs-right{ display:flex; align-items:center; justify-content:center; }
        .svs-video{
          position:relative;
          width:100%;
          aspect-ratio:16 / 9;
          border-radius:18px;
          overflow:hidden;
          background:#000;
          box-shadow: 0 24px 60px rgba(0,0,0,.22);
        }
        .svs-video video{
          position:absolute; inset:0;
          width:100%; height:100%;
          object-fit:cover;  /* fills rectangle cleanly */
        }

        /* make video even bigger on very wide screens, reduce gutter */
        @media (min-width: 1280px){
          .svs-container{
            grid-template-columns: 0.8fr 1.2fr; /* larger video share */
            gap:24px;                            /* tighter like your mock */
          }
        }
        @media (min-width: 1536px){
          .svs-container{
            grid-template-columns: 0.75fr 1.25fr;
            width:min(1500px, 94%);
          }
        }

        /* stack on tablet/mobile */
        @media (max-width: 1024px){
          .svs-container{ grid-template-columns:1fr; gap:22px; }
          .svs-right{ order:-1; }
          .svs-video{ border-radius:12px; }
          .svs-left{ align-items:center; text-align:center; }
          .svs-list{ max-width:420px; width:100%; }
        }
      `}</style>
    </section>
  );
};

export default ServicesVideoSection;
