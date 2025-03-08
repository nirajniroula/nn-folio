import { PrismicRichText } from "@prismicio/react";
import { SlInfo } from "react-icons/sl";

const FloatingInfoButton = ({ title, description }) => {
  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => {
          document.getElementById("info-popup").style.display = "block";
          document.getElementById("info-popup-overlay").style.display = "block";
        }}
        className="btn-info btn-ghost btn-sm btn-circle btn floating-button-left"
        style={{
          position: "fixed",
          zIndex: 1000,
        }}
      >
        <SlInfo className="h-4 w-4" />
      </button>

      {/* Info popup (server-rendered, hidden by default) */}
      <div
        id="info-popup"
        className="info-popup"
        style={{
          display: "none", // Hidden by default
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "black",
          padding: "20px",
          borderRadius: "8px",
          borderWidth: 1,
          borderColor: "rgba(256, 256, 256, 0.2)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          zIndex: 1001,
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "white",
          }}
        >
          {title}
        </h2>
        <p style={{ color: "white" }}>
          <PrismicRichText field={description} />
        </p>

        {/* Close button */}
        <button
          onClick={() => {
            document.getElementById("info-popup").style.display = "none";
            document.getElementById("info-popup-overlay").style.display =
              "none";
          }}
          style={{
            marginTop: "1rem",
            padding: "8px 16px",
            backgroundColor: "#2a303c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>

      {/* Overlay (server-rendered, hidden by default) */}
      <div
        id="info-popup-overlay"
        style={{
          display: "none", // Hidden by default
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          zIndex: 1000,
        }}
      />
    </>
  );
};

export default FloatingInfoButton;
