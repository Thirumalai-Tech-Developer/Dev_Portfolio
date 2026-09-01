import { useEffect, useRef } from "react";

interface ParticleBackgroundProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
}

export default function ParticleBackground({
  className = "",
  quantity = 35,
  staticity = 50,
  ease = 50,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<any[]>([]);
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Avoid running on non-browser environments
    if (typeof window === "undefined") return;

    // Limit DPR on mobile to prevent canvas memory limits & crashes
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d");
    }

    const resizeCanvas = () => {
      if (canvasRef.current && context.current) {
        // Use window innerWidth / innerHeight to keep canvas strictly viewport size (lightweight)
        const w = window.innerWidth;
        const h = window.innerHeight;
        canvasSize.current.w = w;
        canvasSize.current.h = h;
        canvasRef.current.width = w * dpr;
        canvasRef.current.height = h * dpr;
        canvasRef.current.style.width = `${w}px`;
        canvasRef.current.style.height = `${h}px`;
        context.current.setTransform(1, 0, 0, 1, 0, 0);
        context.current.scale(dpr, dpr);
        
        // Re-populate particles based on screen width
        const count = w < 768 ? 15 : quantity;
        circles.current = [];
        for (let i = 0; i < count; i++) {
          circles.current.push(createCircle(w, h));
        }
      }
    };

    const createCircle = (w: number, h: number) => {
      const x = Math.floor(Math.random() * w);
      const y = Math.floor(Math.random() * h);
      const size = Math.floor(Math.random() * 2) + 0.8;
      const alpha = parseFloat((Math.random() * 0.5 + 0.15).toFixed(2));
      const dx = (Math.random() - 0.5) * 0.3;
      const dy = (Math.random() - 0.5) * 0.3;
      const magnetism = 0.1 + Math.random() * 3;
      const hue = Math.random() > 0.5 ? 217 : 270;
      return {
        x,
        y,
        translateX: 0,
        translateY: 0,
        size,
        alpha,
        targetAlpha: alpha,
        dx,
        dy,
        magnetism,
        hue,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      mouse.current.x = clientX - canvasSize.current.w / 2;
      mouse.current.y = clientY - canvasSize.current.h / 2;
    };

    const animate = () => {
      if (context.current && canvasRef.current) {
        context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        
        for (let i = 0; i < circles.current.length; i++) {
          const circle = circles.current[i];
          
          circle.x += circle.dx;
          circle.y += circle.dy;
          circle.translateX +=
            (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) / ease;
          circle.translateY +=
            (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) / ease;

          // Wrap edges
          if (circle.x < 0) circle.x = canvasSize.current.w;
          if (circle.x > canvasSize.current.w) circle.x = 0;
          if (circle.y < 0) circle.y = canvasSize.current.h;
          if (circle.y > canvasSize.current.h) circle.y = 0;

          const posX = circle.x + circle.translateX;
          const posY = circle.y + circle.translateY;

          context.current.beginPath();
          context.current.arc(posX, posY, circle.size, 0, 2 * Math.PI);
          context.current.fillStyle = `hsla(${circle.hue}, 90%, 70%, ${circle.alpha})`;
          context.current.fill();
        }
      }
      animFrameId.current = window.requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animFrameId.current) {
        window.cancelAnimationFrame(animFrameId.current);
      }
    };
  }, [quantity, staticity, ease]);

  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden z-0 ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
