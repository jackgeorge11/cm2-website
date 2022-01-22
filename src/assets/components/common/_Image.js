import React from "react";

export default function _Image({ className, src, alt, hide }) {
  return (
    <div className={`_image ${className}`}>
      <img src={src} alt={alt ? alt : "image"} />
    </div>
  );
}
