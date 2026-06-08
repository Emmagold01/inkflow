import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    
    // 1. SCREEN DIMENSIONS & DENSITY (RETINA) SCALING
    // We adjust the canvas pixel grid size relative to devicePixelRatio to ensure
    // rendering remains sharp and doesn't get blurry on modern screens.
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      
      // Draw in logical screen coordinates instead of raw pixel coordinates
      ctx.resetTransform();
      ctx.scale(dpr, dpr);
    };
    
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // 2. PARALLAX MOUSE SENSING
    // Mouse coordinates ease slowly to create organic, smooth inertia movement.
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    
    const onMouseMove = (e) => {
      // Maps cursor offset to a relative pixel shift scale
      mouse.targetX = (e.clientX - window.innerWidth / 2) / 25;
      mouse.targetY = (e.clientY - window.innerHeight / 2) / 25;
    };
    window.addEventListener("mousemove", onMouseMove);

    // 3. GENERATE STARFIELD DATA
    const stars = [];
    const totalStars = 160;
    
    for (let i = 0; i < totalStars; i++) {
      const isOrbital = i < 65; // A subset of stars form a rotating galaxy center
      
      if (isOrbital) {
        // Math parameters for slow rotation around the center
        stars.push({
          isOrbital: true,
          angle: Math.random() * Math.PI * 2,
          distance: Math.random() * Math.min(width, height) * 0.45 + 30,
          orbitSpeed: (0.0003 + Math.random() * 0.0006),
          size: Math.random() * 1.3 + 0.3,
          alpha: Math.random() * 0.6 + 0.2,
          color: Math.random() > 0.4 ? "#ffffff" : Math.random() > 0.5 ? "#f5a623" : "#ff6b47",
          depth: Math.random() * 0.3 + 0.1, // Parallax depth factor
        });
      } else {
        // Background stars drifting slowly downward
        stars.push({
          isOrbital: false,
          x: Math.random() * width,
          y: Math.random() * height,
          speedX: Math.random() * 0.04 - 0.02,
          speedY: Math.random() * 0.08 + 0.03,
          size: Math.random() * 1.4 + 0.2,
          alpha: Math.random() * 0.7 + 0.1,
          color: "#ffffff",
          depth: Math.random() * 0.7 + 0.3, // Parallax depth factor
        });
      }
    }

    // 4. SHOOTING STARS SYSTEM
    const shootingStars = [];
    
    const spawnShootingStar = () => {
      const angle = Math.PI / 4; // Constant 45 degree angle downward-right
      const speed = Math.random() * 11 + 7;
      
      shootingStars.push({
        x: Math.random() * (width * 0.8),
        y: Math.random() * (height * 0.3),
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 50,
        alpha: 1,
        decay: Math.random() * 0.015 + 0.01,
      });
    };

    // 5. ANIMATION & DRAW LOOP
    const animate = () => {
      // Interpolate current position to target for smooth mouse lag/easing
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // --- Draw Star System ---
      stars.forEach((star) => {
        let sx, sy;

        if (star.isOrbital) {
          // Update orbit position
          star.angle += star.orbitSpeed;
          // Apply mouse drift to the rotation center
          const centerX = width / 2 - mouse.x * star.depth;
          const centerY = height / 2 - mouse.y * star.depth;
          sx = centerX + Math.cos(star.angle) * star.distance;
          sy = centerY + Math.sin(star.angle) * star.distance;
        } else {
          // Update drift position
          star.y += star.speedY;
          star.x += star.speedX;

          // Wrap stars around bounds
          if (star.y > height) {
            star.y = 0;
            star.x = Math.random() * width;
          }
          if (star.x > width) star.x = 0;
          if (star.x < 0) star.x = width;

          // Apply mouse drift to drift coordinate
          sx = star.x - mouse.x * star.depth;
          sy = star.y - mouse.y * star.depth;
        }

        // Draw star dot
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.beginPath();
        ctx.arc(sx, sy, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // --- Draw Shooting Stars ---
      // Trigger new stars with a low chance per frame
      if (Math.random() < 0.0035 && shootingStars.length < 2) {
        spawnShootingStar();
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        ss.x += ss.dx;
        ss.y += ss.dy;
        ss.alpha -= ss.decay;

        if (ss.alpha <= 0) {
          shootingStars.splice(i, 1);
          continue;
        }

        // Draw gradient tail trail
        ctx.globalAlpha = ss.alpha;
        const grad = ctx.createLinearGradient(
          ss.x,
          ss.y,
          ss.x - ss.dx * (ss.length / 8),
          ss.y - ss.dy * (ss.length / 8)
        );
        grad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
        grad.addColorStop(0.2, "rgba(255, 107, 71, 0.6)"); // Coral core
        grad.addColorStop(1, "rgba(245, 166, 35, 0)");     // Amber tail fade

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x - ss.dx * 0.4, ss.y - ss.dy * 0.4);
        ctx.stroke();
      }

      // Reset alpha for safety and schedule next frame
      ctx.globalAlpha = 1.0;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // 6. LIFECYCLE TEARDOWN
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#0a0a0f]">
      {/* Background radial glowing nebulas */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(255,107,71,0.07)_0%,rgba(0,0,0,0)_70%)] blur-[80px] animate-float-slow" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[radial-gradient(circle,rgba(245,166,35,0.05)_0%,rgba(0,0,0,0)_70%)] blur-[90px] animate-float-delayed" />
      
      {/* Fully responsive background drawing canvas */}
      <canvas 
        ref={canvasRef} 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
