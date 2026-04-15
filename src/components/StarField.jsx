import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      const count = Math.floor((canvas.width * canvas.height) / 5000);
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() < 0.3 ? 2 : 1,
          baseOpacity: Math.random() * 0.35 + 0.05,
          twinkleSpeed: Math.random() * 0.002 + 0.0008,
          phase: Math.random() * Math.PI * 2,
          parallax: 0.02 + Math.random() * 0.04,
          color:
            Math.random() < 0.65
              ? [190, 210, 255]
              : Math.random() < 0.5
              ? [0, 212, 170]
              : [140, 150, 255],
        });
      }
    };

    const drawGrid = () => {
      const gridSize = 48;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.012)';
      ctx.lineWidth = 1;
      ctx.setLineDash([1, 3]);

      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(Math.floor(x) + 0.5, 0);
        ctx.lineTo(Math.floor(x) + 0.5, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, Math.floor(y) + 0.5);
        ctx.lineTo(canvas.width, Math.floor(y) + 0.5);
        ctx.stroke();
      }
      ctx.setLineDash([]);
    };

    let lastTime = 0;
    const animate = (time) => {
      if (time - lastTime < 33) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGrid();

      const scrollY = window.scrollY;

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.phase);
        const opacity = star.baseOpacity + twinkle * 0.15;
        if (opacity <= 0) return;

        const y =
          ((star.y - scrollY * star.parallax) % canvas.height +
            canvas.height) %
          canvas.height;

        const [r, g, b] = star.color;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
        ctx.fillRect(Math.floor(star.x), Math.floor(y), star.size, star.size);
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    createStars();
    animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      resize();
      createStars();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{
        zIndex: 0,
        background:
          'linear-gradient(180deg, #0a0a0f 0%, #0d0f18 40%, #0a0e14 70%, #0a0a0f 100%)',
      }}
    />
  );
}
