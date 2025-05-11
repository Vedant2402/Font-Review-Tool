import React from "react";

const FontPreview = ({ font, text, fontSize, fontWeight, letterSpacing, lineHeight }) => {
  const style = {
    fontFamily: font,
    fontSize: `${fontSize}px`,
    fontWeight,
    letterSpacing: `${letterSpacing}px`,
    lineHeight,
  };

  return (
    <div className="font-preview">
      <h3 style={{ fontFamily: font }}>{font}</h3>
      <p style={style}>{text}</p>
    </div>
  );
};

export default FontPreview;
