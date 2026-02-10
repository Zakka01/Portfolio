"use client";
import { useRef, useEffect } from "react";

const Noise = ({ patternAlpha = 15 }) => {
  const grainRef = useRef(null);

  useEffect(() => {
    const canvas = grainRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const canvasSize = 1024;

    const resize = () => {
      canvas.width = canvasSize;
      canvas.height = canvasSize;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
    };

    const drawGrain = () => {
      const imageData = ctx.createImageData(canvasSize, canvasSize);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255;
        data[i] = value;
        data[i + 1] = value;
        data[i + 2] = value;
        data[i + 3] = patternAlpha;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    window.addEventListener("resize", resize);
    resize();
    drawGrain(); // ✅ STATIC

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [patternAlpha]);

  return (
    <canvas
      ref={grainRef}
      className="pointer-events-none fixed inset-0 w-full h-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
};

export default Noise;
