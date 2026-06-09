"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle type interface
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }

    // Adapt particle count to screen area
    const getParticleCount = (w: number, h: number) => {
      const area = w * h;
      return Math.min(80, Math.floor(area / 16000));
    };

    let particleCount = getParticleCount(width, height);
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };

    // Helper to generate particles
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 1,
        });
      }
    };

    initParticles();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particleCount = getParticleCount(width, height);
      initParticles();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.active = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
        mouse.active = true;
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = document.documentElement.classList.contains("dark");

      // Dynamic theme styling
      const dotColor = isDark ? "rgba(255, 255, 255, 0.12)" : "rgba(15, 23, 42, 0.08)";
      const lineColor = isDark ? "rgba(99, 102, 241, 0.06)" : "rgba(99, 102, 241, 0.04)";
      const mouseLineColor = isDark ? "rgba(129, 140, 248, 0.14)" : "rgba(79, 70, 229, 0.09)";

      // Draw and update particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce on boundaries
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      // Render connected lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = (1 - dist / 110) * 0.7;
            ctx.stroke();
          }
        }

        // Connect particles to mouse cursor
        if (mouse.active) {
          const distToMouse = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (distToMouse < 180) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = mouseLineColor;
            ctx.lineWidth = (1 - distToMouse / 180) * 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000"
    />
  );
}
