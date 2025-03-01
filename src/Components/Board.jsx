import React, { useState } from "react";

const Board = (props) => {
  const { imageSrc, imageAlt, name, link } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <td>
      <div
        style={{
          width: "200px",
          height: "300px",
          padding: "17px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textAlign: "center",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "transform 0.3s ease", 
            transform: isHovered ? "scale(1.07)" : "scale(1)", 
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              margin: "10px 0",
            }}
          >
            {name}
          </div>
          <button
            style={{
              fontSize: "14px",
              color: "#fff",
              backgroundColor: "#007BFF",
              border: "none",
              padding: "8px 16px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => window.open(link, "_blank")}
          >
            Link
          </button>
        </div>
      </div>
    </td>
  );
};

export default Board;
