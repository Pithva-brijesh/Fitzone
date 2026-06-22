import React, { useState } from "react";

export default function AppImage({
  src,
  alt,
  className = "",
}) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 text-white ${className}`}
      >
        No Image
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}