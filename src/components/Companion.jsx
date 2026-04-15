import { useEffect, useRef, useMemo } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function CoreGeometry() {
  const group = useRef();
  const innerCore = useRef();
  
  // Geometric structure
  const points = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(1.2, 1);
    return new THREE.EdgesGeometry(geom);
  }, []);

  useFrame((state, delta) => {
    // Elegant, continuous rotation
    group.current.rotation.y += delta * 0.6;
    group.current.rotation.x += delta * 0.4;
    group.current.rotation.z += delta * 0.2;
    
    // Internal organic pulsing
    const scale = 1 + Math.sin(state.clock.elapsedTime * 2.5) * 0.08;
    if (innerCore.current) {
      innerCore.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={group}>
      {/* Outer abstract wireframe network */}
      <lineSegments geometry={points}>
        <lineBasicMaterial 
          color="#f59e0b" // Ambient Amber
          transparent 
          opacity={0.5} 
        />
      </lineSegments>
      
      {/* Dynamic inner core nodes */}
      <Icosahedron ref={innerCore} args={[0.5, 0]}>
        <meshBasicMaterial color="#ea580c" wireframe transparent opacity={0.7} />
      </Icosahedron>
      
      {/* Bright intellect center point */}
      <Sphere args={[0.15, 16, 16]}>
        <meshBasicMaterial color="#ffffff" />
      </Sphere>
    </group>
  );
}

export default function Companion() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Ethereal spring physics for trailing the mouse smoothly
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1.5 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Offset by half the container size (w-24 = 96px -> 48px offset) to center on cursor
      mouseX.set(e.clientX - 48);
      mouseY.set(e.clientY - 48);
    };
    
    // Initialize starting position quietly
    mouseX.set(window.innerWidth / 2 - 48);
    mouseY.set(window.innerHeight / 2 - 48);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-24 h-24 pointer-events-none z-[100]"
      style={{
        x: springX,
        y: springY,
        filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.4))'
      }}
    >
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <CoreGeometry />
      </Canvas>
    </motion.div>
  );
}
