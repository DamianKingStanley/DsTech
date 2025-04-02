"use client";

import React, { useEffect, useCallback } from "react";

const Particles = ({ className }: { className?: string }) => {
  const initParticles = useCallback(() => {
    // Particle animation implementation
    // Can use Canvas API or a library like tsparticles
    // This is a placeholder implementation
  }, []);

  useEffect(() => {
    initParticles();
  }, [initParticles]);

  return <canvas className={className} id="particles-canvas"></canvas>;
};

export default Particles;