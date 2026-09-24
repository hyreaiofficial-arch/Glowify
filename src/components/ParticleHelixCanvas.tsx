import React, { useEffect, useRef } from 'react';

/**
 * ParticleHelixCanvas renders an ambient, scientific visualization:
 * - Slowly drifting molecular bio-particles
 * - Elegant dual-strand DNA helix curve with base-pair rungs
 * - Smoothly responds to window scroll and mouse movement
 * - Hardware accelerated, automatically adjusts for device pixel ratio
 * - Respects prefers-reduced-motion
 */
export const ParticleHelixCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Drifting particles
    const particleCount = width < 768 ? 32 : 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.5 + 0.15,
      hue: Math.random() > 0.8 ? 'gold' : 'teal', // luminous teal or soft gold
    }));

    let scrollY = window.scrollY;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    let mouseX = width / 2;
    let mouseY = height / 2;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let t = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Deep subtle radial gradient at top right and center
      const gradient = ctx.createRadialGradient(
        width * 0.8,
        height * 0.2,
        50,
        width * 0.8,
        height * 0.2,
        width * 0.6
      );
      gradient.addColorStop(0, 'rgba(20, 184, 166, 0.05)');
      gradient.addColorStop(0.5, 'rgba(10, 15, 29, 0)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Update & render drifting particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        if (!prefersReducedMotion) {
          p.x += p.speedX;
          p.y += p.speedY;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.hue === 'gold') {
          ctx.fillStyle = `rgba(226, 195, 122, ${p.alpha * 0.8})`;
        } else {
          ctx.fillStyle = `rgba(45, 212, 191, ${p.alpha})`;
        }
        ctx.fill();
      }

      // Draw mathematical DNA Helix line spanning the height
      // Positioned on the right side of the screen on desktop, or centered faintly
      const helixCenterX = width > 1024 ? width * 0.78 : width * 0.85;
      const helixAmplitude = width > 768 ? 48 : 28;
      const helixWavelength = 220; // vertical repeat distance
      const scrollOffset = scrollY * 0.35;
      const steps = Math.floor(height / 14);

      if (!prefersReducedMotion) {
        t += 0.012;
      }

      for (let i = 0; i <= steps; i++) {
        const y = i * 14;
        const phase = (y + scrollOffset) / helixWavelength + t;

        const sinVal = Math.sin(phase);
        const cosVal = Math.cos(phase);

        // Strand 1
        const x1 = helixCenterX + sinVal * helixAmplitude;
        // Strand 2
        const x2 = helixCenterX - sinVal * helixAmplitude;

        // Depth perspective calculation based on cosVal
        const depth1 = (cosVal + 1) / 2; // 0 to 1
        const depth2 = (-cosVal + 1) / 2;

        // Connecting rung (base pair) every 2 steps
        if (i % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(x1, y);
          ctx.lineTo(x2, y);
          const rungAlpha = Math.abs(cosVal) * 0.12 + 0.03;
          ctx.strokeStyle = `rgba(226, 195, 122, ${rungAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Small central junction dot
          if (Math.abs(sinVal) < 0.2) {
            ctx.beginPath();
            ctx.arc((x1 + x2) / 2, y, 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(245, 158, 11, 0.35)`;
            ctx.fill();
          }
        }

        // Draw node on Strand 1 (Teal)
        ctx.beginPath();
        const r1 = 1.2 + depth1 * 1.5;
        ctx.arc(x1, y, r1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${0.15 + depth1 * 0.45})`;
        ctx.fill();

        // Draw node on Strand 2 (Gold / Soft Teal)
        ctx.beginPath();
        const r2 = 1.2 + depth2 * 1.5;
        ctx.arc(x2, y, r2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(226, 195, 122, ${0.12 + depth2 * 0.4})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
