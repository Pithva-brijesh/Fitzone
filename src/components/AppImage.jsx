import React from "react";

function Image({
  src,
  alt = "Image",
  className = "",
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src =
          "https://placehold.co/600x400?text=No+Image";
      }}
      {...props}
    />
  );
}

export default Image;