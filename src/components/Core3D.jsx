import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Sphere } from '@react-three/drei';
import * as THREE from 'three';

function CoreGeometry({ hovered }) {
  const group = useRef();
  const innerCore = useRef();
  
  // Create an elegant wireframe structure for the outer shell
  const points = useMemo(() => {
    const geom = new THREE.IcosahedronGeometry(1.2, 1);
    return new THREE.EdgesGeometry(geom);
  }, []);

  useFrame((state, delta) => {
    // 1. Smooth ambient rotation (slower, intelligent feel)
    group.current.rotation.y += delta * (hovered ? 0.3 : 0.1);
    group.current.rotation.x += delta * (hovered ? 0.2 : 0.08);
    
    // 2. Anti-gravity drift
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;

    // 3. Look-at cursor interaction via parallax tilt
    const pointerX = state.pointer.x;
    const pointerY = state.pointer.y;
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -pointerX * 0.4, 0.05);
    
    // 4. Subtle pulsating inner core
    const scale = 1 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    if (innerCore.current) {
      innerCore.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group ref={group}>
      {/* Outer abstract network sphere */}
      <lineSegments geometry={points}>
        <lineBasicMaterial 
          color={hovered ? "#7dd3fc" : "#38bdf8"} 
          transparent 
          opacity={hovered ? 0.7 : 0.4} 
        />
      </lineSegments>
      
      {/* Nodes at the inner intersections */}
      <Icosahedron ref={innerCore} args={[0.6, 0]}>
        <meshBasicMaterial color="#818cf8" wireframe transparent opacity={0.6} />
      </Icosahedron>
      
      {/* Center energy point (The 'Intelligence') */}
      <Sphere args={[0.15, 16, 16]}>
        <meshBasicMaterial color="#ffffff" />
      </Sphere>
    </group>
  );
}

export default function Core3D() {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="w-12 h-12 relative flex items-center justify-center cursor-pointer"
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      style={{
        zIndex: 10,
        filter: hovered ? 'drop-shadow(0 0 12px rgba(0, 240, 255, 0.4))' : 'drop-shadow(0 0 6px rgba(0, 240, 255, 0.1))',
        transition: 'filter 0.5s ease'
      }}
    >
      <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} className="w-full h-full pointer-events-none">
        <CoreGeometry hovered={hovered} />
      </Canvas>
    </div>
  );
}
